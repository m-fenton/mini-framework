import render from './vdom/render';
import mount from './vdom/mount';
import { createVApp } from './vdom/createVApp';
import { handleEvent } from './vdom/events/eventHelpers/handleEvent';
import { registerEvent } from './vdom/events/eventHelpers/registerEvent';
import { handleEnterKeySubmit } from './vdom/events/handleEnterKeySubmit';
import { removeElementHandler } from './dom/removeElementHandler'; // Probably to be removed, uses DOM manipulation, not vDOM

// Application State
export let toDoList = [];
export let $rootEl;
let vApp;

// Getters and Setters for Virtual DOM
export const getVApp = () => vApp;
export const setVApp = (newVApp) => {
  vApp = newVApp;
};

// Initialize Application
const initializeApp = () => {
  setVApp(createVApp(toDoList)); // Create initial VApp
  $rootEl = mount(render(vApp), document.getElementById('root')); // Mount the initial app

  // Register events
  registerEvent('keydown', handleEnterKeySubmit); // Keydown for Enter key to add items
  registerEvent('keydown', function (event) { if (event.key !== "Enter") console.log(event.key); }); // Keydown for Enter key to add items
  registerEvent('click', (event) => removeElementHandler(event, "destroy", "li")); // click event, USES DOM MANIPULATION, NEEDS CHANGED
  registerEvent('dblclick', function (event) { console.log('Window was double-clicked!', event) }); // example double click event

  window.onkeydown = handleEvent; // Global event handler
  window.onclick = handleEvent // Global event handler
  window.ondblclick = handleEvent // Global event handler
};

// Update the root element in the DOM
export function updateRootEl(newRootEl) {
  $rootEl = newRootEl; // Update the reference
  const oldRoot = document.getElementById('root');

  if (oldRoot && oldRoot.parentNode) {
    oldRoot.parentNode.replaceChild($rootEl, oldRoot); // Replace the old root element with the new one
  } else {
    console.warn("Could not find old root element to replace");
  }
}

// Initialize the application
initializeApp();
