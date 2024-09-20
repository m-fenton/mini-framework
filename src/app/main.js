import minion from '../minion/minion';

import { handleEnterKeySubmit } from './events/handleEnterKeySubmit';
import { handleClickDelete } from './events/handleClickDelete';
import { handleClickToggleCompleted } from './events/handleClickToggleCompleted';
import { handleClickClearCompleted } from './events/handleClickClearCompleted';
import { handleClickToggleCompletedAll } from './events/handleClickToggleCompletedAll';
import { handleDoubleClickEdit } from './events/handleDoubleClickEdit';

import { vToDoApp } from './components/createToDoApp';

let $rootEl

export let toDoList = [];
// Initialize Application
const initializeApp = () => {
  
  let vApp = vToDoApp(toDoList)

  let $rootElement = document.getElementById('root')

  let $App = minion.render(vApp)
  // minion.setVApp(vApp); // Create initial VApp
 let mountedApp = minion.mount($App, $rootElement); // minion.mount the initial app

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

// Initialize the application
initializeApp();
