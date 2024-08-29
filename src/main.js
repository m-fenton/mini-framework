import render from './vdom/render';
import mount from './vdom/mount';
import { createVApp } from './vdom/createVApp';
import { handleEvent } from './vdom/events/eventHelpers/handleEvent';
import { registerEvent } from './vdom/events/eventHelpers/registerEvent';
import { handleEnterKeySubmit } from './vdom/events/handleEnterKeySubmit';
import { handleClickDelete } from './vdom/events/handleClickDelete';
import { handleClickToggleCompleted } from './vdom/events/handleClickToggleCompleted';
import { handleClickClearCompleted } from './vdom/events/handleClickClearCompleted';
import { handleClickToggleAll } from './vdom/events/handleClickToggleAll';
import { handleDoubleClickEdit } from './vdom/events/handleDoubleClickEdit';

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
  // Keydown
  registerEvent('keydown', handleEnterKeySubmit); // Keydown for Enter key to add items
  registerEvent('keydown', function (event) { if (event.key !== "Enter") console.log(event.key); }); // Keydown for Enter key to add items
  // Click
  registerEvent('click', (event) => handleClickDelete(event, toDoList))
  registerEvent('click', (event) => handleClickToggleCompleted(event))
  registerEvent('click', (event) => handleClickClearCompleted(event, toDoList))
  registerEvent('click', (event) => handleClickToggleAll(event))
// Double Click
  registerEvent('dblclick', (event) => handleDoubleClickEdit(event, toDoList)); // example double click event

  // Activate event handlers
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
