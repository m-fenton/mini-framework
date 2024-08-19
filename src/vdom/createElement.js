export default (tagName, { attrs = {}, children = [] } = {}) => {
  const vElem = Object.create(null);

  Object.assign(vElem, {
    tagName,
    attrs,
    children,
  });

  return vElem;
};

// import { registerEvent } from './registerEvent';

// const createElement = (tagName, { attrs = {}, children = [] } = {}) => {
//     // Create a virtual element object
//     const vElem = {
//         tagName,
//         attrs: { ...attrs },
//         children: children.map(child => 
//             typeof child === 'string' ? child : createElement(child.tagName, child)
//         ),
//     };

//     // Register events in the event registry
//     for (let attr in attrs) {
//         if (attr.startsWith('on')) {
//             const eventType = attr.slice(2).toLowerCase();
//             registerEvent(eventType, `#${attrs.id}`, attrs[attr]);
//             delete vElem.attrs[attr]; // Remove the event handler from attributes
//         }
//     }

//     return vElem;
// };

// export default createElement;




