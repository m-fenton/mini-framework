export const eventRegistry = {}; // Object to store event listeners

// Function to register events and their handlers
export const registerEvent = (eventType, handler) => {
  if (!eventRegistry[eventType]) {
    eventRegistry[eventType] = []; // Initialize if not already initialized
  }
  eventRegistry[eventType].push(handler); // Store handler for the event type
};