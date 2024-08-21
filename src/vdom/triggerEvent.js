import { eventRegistry } from "./registerEvent";

export default (elementId, eventType, event) => {
    if (eventRegistry[elementId] && eventRegistry[elementId][eventType]) {
        eventRegistry[elementId][eventType].forEach(handler => handler(event));
    }
}
