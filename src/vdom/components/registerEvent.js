const eventRegistry = {};

export default (elementId, eventType, handler) => {
    if (!eventRegistry[elementId]) {
        eventRegistry[elementId] = {};
    }
    if (!eventRegistry[elementId][eventType]) {
        eventRegistry[elementId][eventType] = [];
    }
    eventRegistry[elementId][eventType].push(handler);
}