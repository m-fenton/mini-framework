const eventRegistry = {};

export default (type, selector, handler) => {

    if (!eventRegistry[type]) {
        eventRegistry[type] = [];
    }
    eventRegistry[type].push({ selector, handler });
    console.log("in event registry", eventRegistry)
}

export { eventRegistry }; // Exporting for use in triggerEvent.js if necessary

// Centralized event registry
// const eventRegistry = {};

// export const registerEvent = (type, selector, handler) => {
//     if (!eventRegistry[type]) {
//         eventRegistry[type] = [];
//     }
//     eventRegistry[type].push({ selector, handler });
// };

// export default eventRegistry; // Export the registry for use in other modules



