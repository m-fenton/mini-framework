export const eventRegistry = {};

export default (type, selector, handler) => {
    if (!eventRegistry[type]) {
        eventRegistry[type] = [];
    }
    eventRegistry[type].push({ selector, handler });
}
