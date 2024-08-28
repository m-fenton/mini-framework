// functionality
import render from './vdom/render';
import mount from './vdom/mount';

// components
import { createHeader } from './vdom/components/createHeader';
import { createMain } from './vdom/components/createMain';
import { createFooter } from './vdom/components/createFooter';


// events
import { handleEvent } from './vdom/events/eventHandling/handleEvent';
import { registerEvent } from './vdom/events/eventHandling/registerEvent';
import { enterPress } from './vdom/events/enterPress';
// DOM manipulation event; to be removed?
import { removeElementHandler } from './dom/removeElementHandler';

export let toDoList = []
export let $rootEl;

export const createVApp = (toDoList) => {
  return {
    tagName: 'div',
    attrs: {
      id: 'root',
      class: 'todoapp',
    },
    children: [
      createHeader(),
      createMain([...toDoList]),  // Create a new array to ensure immutability
      ...(toDoList.length > 0 ? [createFooter(toDoList.length)] : [])],
  };
};

let _vApp;
export const getVApp = () => _vApp;
export const setVApp = (newVApp) => {
  _vApp = newVApp;
};

// Initial setup
setVApp(createVApp(toDoList));
$rootEl = mount(render(_vApp), document.getElementById('root'));

// Add events to eventRegistry
registerEvent('keydown', enterPress);

// updates the $rootEl since $rootEl is read-only when exported.  Was much easier when I didn't have to export
export function updateRootEl(newRootEl) {
 // console.log("Updating root element:", newRootEl);
  $rootEl = newRootEl;
  const oldRoot = document.getElementById('root');
  if (oldRoot && oldRoot.parentNode) {
 //   console.log("Replacing old root with new root");
    oldRoot.parentNode.replaceChild($rootEl, oldRoot);
  } else {
    console.warn("Could not find old root element to replace");
  }
}

window.onkeydown = handleEvent
window.onclick = (event) => removeElementHandler(event, "destroy", "li")



