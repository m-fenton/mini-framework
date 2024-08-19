export default (elementId, eventType, event) => {
    if (eventRegistry[elementId] && eventRegistry[elementId][eventType]) {
        eventRegistry[elementId][eventType].forEach(handler => handler(event));
    }
}

// import eventRegistry from './registerEvent';

// export const triggerEvent = (element, eventType, event) => {
//     const { id, className, tagName } = element;

//     const matchesSelector = (selector) => {
//         return (
//             (id && selector === `#${id}`) ||
//             (className && selector === `.${className}`) ||
//             selector.toLowerCase() === tagName.toLowerCase()
//         );
//     };

//     if (eventRegistry[eventType]) {
//         eventRegistry[eventType].forEach(({ selector, handler }) => {
//             if (matchesSelector(selector)) {
//                 handler.call(element, event);
//             }
//         });
//     }
// };


