function createElement(tag, attrs = {}, ...children) {
    const element = document.createElement(tag);
    for (let attr in attrs) {
        element.setAttribute(attr, attrs[attr]);
    }
    children.forEach(child => {
        if (typeof child === 'string') {
            element.appendChild(document.createTextNode(child));
        } else {
        element.appendChild(child);
        }
    });
    return element;
}