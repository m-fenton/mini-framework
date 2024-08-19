// functionality
import createElement from './vdom/createElement';
import render from './vdom/render';
import mount from './vdom/mount';
import diff from './vdom/diff';
import { routing } from './vdom/routing';
import { updateURLWithCount } from './vdom/updateURLWithCount';
import registerEvent from './vdom/registerEvent';
import triggerEvent from './vdom/triggerEvent';

// elements
import { createHeader } from './vdom/components/createHeader';
import { createMain } from './vdom/components/createMain';
import { createFooter } from './vdom/components/createFooter';

//events
import { handleClickDelete } from './vdom/events/handleClickDelete';
import { handleSingleClickToggle } from './vdom/events/handleSingleClickToggle';
import { handleDoubleClickEdit } from './vdom/events/handleDoubleClickEdit';
import { handleEnterKeySubmit } from './vdom/events/handleEnterKeySubmit';

let count = 1

const createVApp = count => createElement('div', {
  attrs: {
    id: 'root',
    class: 'todoapp',
    dataCount: count, // we use the count here
  },
  children: [
    createHeader(),
    createMain(),
    createFooter(count),
  ],

});



let vApp = createVApp(count);
const $app = render(vApp);
let $rootEl = mount($app, document.getElementById('root'));

// Example of a specific event handler
function handleImageClick() {
  count++;
  const vNewApp = createVApp(count);
  const patch = diff(vApp, vNewApp);
  $rootEl = patch($rootEl);
  vApp = vNewApp;
  updateURLWithCount(count);
  routing()
}

$rootEl.addEventListener('click', handleImageClick);
// let $rootEl = mount($app, document.getElementById('app'));

// setInterval(() => {
//   const n = Math.floor(Math.random() * 10);
//   const vNewApp = createVApp(n);
//   const patch = diff(vApp, vNewApp);

//   // we might replace the whole $rootEl,
//   // so we want the patch will return the new $rootEl
//   $rootEl = patch($rootEl);

//   vApp = vNewApp;
// }, 1000);

registerEvent('click', '.destroy', handleClickDelete);

// Triggering an event

const deleteButton = document.querySelector('.destroy');
// Create a simulated event object
const simulatedEvent = {
  type: 'click',
  target: deleteButton,
  bubbles: true,
  cancelable: true,
  // Additional custom properties can be added here
};

console.log("simulated event", simulatedEvent)

window.onclick = triggerEvent('click', simulatedEvent);
// Trigger the registered click events
//triggerEvent('click', simulatedEvent);

