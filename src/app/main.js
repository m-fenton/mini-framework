import minion from '../minion/framework';

import { handleEnterKeySubmit } from './events/handleEnterKeySubmit';
import { handleClickDelete } from './events/handleClickDelete';
import { handleClickToggleCompleted } from './events/handleClickToggleCompleted';
import { handleClickClearCompleted } from './events/handleClickClearCompleted';
import { handleClickToggleCompletedAll } from './events/handleClickToggleCompletedAll';
import { handleDoubleClickEdit } from './events/handleDoubleClickEdit';

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
  setVApp(minion.createVApp(toDoList)); // Create initial VApp
  $rootEl = minion.mount(minion.render(vApp), document.getElementById('root')); // minion.mount the initial app

  // start up minion.routing functionality
  minion.routing(...toDoList)

  // Register events
  // Keydown
  minion.registerEvent('keydown', handleEnterKeySubmit); // Keydown for Enter key to add items
  // Click
  minion.registerEvent('click', (event) => handleClickDelete(event, toDoList))
  minion.registerEvent('click', (event) => handleClickToggleCompleted(event))
  minion.registerEvent('click', (event) => handleClickClearCompleted(event, toDoList))
  minion.registerEvent('click', (event) => handleClickToggleCompletedAll(event))
  // Double Click
  minion.registerEvent('dblclick', (event) => handleDoubleClickEdit(event, toDoList)); // example double click event

  // Activate event handlers
  window.onkeydown = minion.handleEvent; // Global event handler
  window.onclick = minion.handleEvent // Global event handler
  window.ondblclick = minion.handleEvent // Global event handler
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
