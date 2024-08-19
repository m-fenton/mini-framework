// export default (elementId, eventType, event) => {
//     if (eventRegistry[elementId] && eventRegistry[elementId][eventType]) {
//         eventRegistry[elementId][eventType].forEach(handler => handler(event));
//     }
// }

import { eventRegistry } from './registerEvent'; // Ensure you import eventRegistry if needed

/**
 * Trigger an event of a given type for elements matching a selector.
 * @param {string} eventType - Type of the event to trigger (e.g., 'click').
 * @param {Event} event - The event object to pass to handlers.
 */
export default (eventType, event) => {

    console.log("do i get to trigger")
    console.log("TE event", event)

    

    if (eventRegistry[eventType]) {
        console.log("do i get to trigger if statement")
        eventRegistry[eventType].forEach(({ selector, handler }) => {
            // Query elements matching the selector

            console.log("selector", selector)
            console.log("handler", handler)

            const elements = document.querySelectorAll(selector);

            console.log("elements", elements)
            
            elements.forEach(element => {
                if (element.matches(selector)) {
                    console.log("handler being called at end of TriggerEvent")
                    handler(event); // Call the handler
                    
                }
            });
        });
    }
};



