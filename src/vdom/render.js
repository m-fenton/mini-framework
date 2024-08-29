const renderElem = ({ tagName, attrs, children}) => {
    // create the element
    //   e.g. <div></div>
    const $el = document.createElement(tagName);
  
    // add all attributs as specified in vNode.attrs
    //   e.g. <div id="app"></div>
    for (const [k, v] of Object.entries(attrs)) {
      $el.setAttribute(k, v);
    }
  
    // append all children as specified in vNode.children
    //   e.g. <div id="app"><img></div>
    for (const child of children) {
      $el.appendChild(render(child));
    }
  
    return $el;
  };
  
  const render = (vNode) => {
    if (typeof vNode === 'string') {
      return document.createTextNode(vNode);
    }
  
    // we assume everything else to be a virtual element
    return renderElem(vNode);
  };
  
  export default render;