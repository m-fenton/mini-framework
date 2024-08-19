const eventRegistry = {};

export default (type, selector, handler) => {
    if (!eventRegistry[type]) {
        eventRegistry[type] = [];
    }
    eventRegistry[type].push({ selector, handler });
}

// Centralized event registry
// const eventRegistry = {};

// export const registerEvent = (type, selector, handler) => {
//     if (!eventRegistry[type]) {
//         eventRegistry[type] = [];
//     }
//     eventRegistry[type].push({ selector, handler });
// };

// export default eventRegistry; // Export the registry for use in other modules



