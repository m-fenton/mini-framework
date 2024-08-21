// functionality
import createElement from './vdom/createElement';
import render from './vdom/render';
import mount from './vdom/mount';
import diff from './vdom/diff';
import { updateURLWithCount } from './vdom/updateURLWithCount';
import registerEvent from './vdom/registerEvent';
import triggerEvent from './vdom/triggerEvent';

// elements
import { createHeader } from './vdom/components/createHeader';
import { createMain } from './vdom/components/createMain';
import { createFooter } from './vdom/components/createFooter';


let toDoList = []

const createVApp = (toDoList) => createElement('div', {
  attrs: {
    id: 'root',
    class: 'todoapp',
    dataCount: toDoList.length, // we use the count here
  },
  children: [
    createHeader(),
    createMain(),
    createFooter(toDoList.length),
  ],

});



let vApp = createVApp(toDoList);
const $app = render(vApp);
let $rootEl = mount($app, document.getElementById('root'));

// Example of a specific event handler
function handleImageClick() {
  const vNewApp = createVApp(toDoList);
  const patch = diff(vApp, vNewApp);
  $rootEl = patch($rootEl);
  vApp = vNewApp;
  updateURLWithCount(toDoList.length);
}
$rootEl.addEventListener('click', handleImageClick);


let toDoListElement = document.getElementsByClassName("todo-list")
console.log(toDoListElement)
