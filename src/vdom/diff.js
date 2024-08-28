import render from './render';

// Helper function to zip two arrays together
const zip = (xs, ys) => {
    const zipped = [];
    for (let i = 0; i < Math.min(xs.length, ys.length); i++) {
        zipped.push([xs[i], ys[i]]);
    }
    return zipped;
};

// Diffing attributes between two virtual DOM nodes
const diffAttrs = (oldAttrs, newAttrs) => {
    const patches = [];

    // Setting new or updated attributes
    for (const [k, v] of Object.entries(newAttrs)) {
        if (oldAttrs[k] !== v) {
            patches.push($node => {
                $node.setAttribute(k, v);
                return $node;
            });
        }
    }

    // Removing old attributes that are not present in the new node
    for (const k in oldAttrs) {
        if (!(k in newAttrs)) {
            patches.push($node => {
                $node.removeAttribute(k);
                return $node;
            });
        }
    }

    return $node => {
        for (const patch of patches) {
            patch($node);
        }
        return $node;
    };
};

// Diffing children between two virtual DOM nodes
const diffChildren = (oldVChildren, newVChildren) => {
    const childPatches = [];
    
    oldVChildren.forEach((oldVChild, i) => {
        childPatches.push(diff(oldVChild, newVChildren[i]));
    });

    const additionalPatches = [];
    for (const additionalVChild of newVChildren.slice(oldVChildren.length)) {
        additionalPatches.push($node => {
            $node.appendChild(render(additionalVChild));
            return $node;
        });
    }

    return $parent => {
        // Applying child patches
        for (const [patch, $child] of zip(childPatches, $parent.childNodes)) {
            if (patch) {
                patch($child);
            }
        }

        // Adding additional patches (new children)
        for (const patch of additionalPatches) {
            patch($parent);
        }
        return $parent;
    };
};

// Main diff function to compute differences between old and new virtual DOM
const diff = (oldVTree, newVTree) => {
    if (!newVTree) {
        // New tree is undefined; remove the node
        return $node => {
            $node.remove();
            return undefined;
        };
    }

    if (typeof oldVTree === 'string' || typeof newVTree === 'string') {
        if (oldVTree !== newVTree) {
            return $node => {
                const $newNode = render(newVTree);
                $node.replaceWith($newNode);
                return $newNode;
            };
        } else {
            return $node => $node;
        }
    }

    if (oldVTree != null || oldVTree.tagName !== newVTree.tagName) {
        return $node => {
            const $newNode = render(newVTree);
            $node.replaceWith($newNode);
            return $newNode;
        };
    }

    const patchAttrs = diffAttrs(oldVTree.attrs, newVTree.attrs);
    const patchChildren = diffChildren(oldVTree.children, newVTree.children);

    return $node => {
        patchAttrs($node);
        patchChildren($node);
        return $node;
    };
};

export default diff;
