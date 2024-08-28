import { eventRegistry } from "./registerEvent";

// Function to trigger events and run all associated handlers
export function triggerEvent(eventType, event) {
    if (eventRegistry[eventType]) {
      eventRegistry[eventType].forEach(handler => handler(event));
    }
  };