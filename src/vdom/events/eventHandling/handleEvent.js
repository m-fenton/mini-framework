import {triggerEvent} from "./triggerEvent";

export const handleEvent = (event) => {
    const eventType = event.type; // Get event type (e.g., 'keydown')
    triggerEvent(eventType, event); // Trigger the event from our custom event system
};
