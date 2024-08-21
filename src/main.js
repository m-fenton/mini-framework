// functionality
import createElement from './vdom/createElement';
import render from './vdom/render';
import mount from './vdom/mount';
import diff from './vdom/diff';
import { updateURLWithCount } from './vdom/updateURLWithCount';

// elements
import { createHeader } from './vdom/components/createHeader';
import { createMain } from './vdom/components/createMain';
import { createFooter } from './vdom/components/createFooter';
import { createListItem } from './vdom/components/createListItem';

let toDoList = []

const createVApp = (toDoList) => createElement('div', {
  attrs: {
    id: 'root',
    class: 'todoapp',
    dataCount: toDoList.length, // we use the count here
  },
  children: [
    createHeader(),
    createMain(toDoList),
    createFooter(toDoList.length),
  ],

});



let vApp = createVApp(toDoList);
const $app = render(vApp);
let $rootEl = mount($app, document.getElementById('root'));

// Example of a specific event handler
// function handleImageClick() {
//   const vNewApp = createVApp(toDoList);
//   const patch = diff(vApp, vNewApp);
//   $rootEl = patch($rootEl);
//   vApp = vNewApp;
//   updateURLWithCount(toDoList.length);
// }
// $rootEl.addEventListener('click', handleImageClick);


function handleEnterPress() {

  // toDoList.push(createListItem("New String"))
  let todoInputValue = document.getElementById("todo-input").value
  let newToDoElement = render(createListItem(todoInputValue))
  let toDoListElement = document.getElementsByClassName("todo-list")[0]
  toDoListElement.appendChild(newToDoElement)
  // const vNewApp = createVApp(toDoList);
  // const patch = diff(vApp, vNewApp);
  // $rootEl = patch($rootEl);
  // vApp = vNewApp;
  updateURLWithCount(toDoList.length);
  console.log("todoList", toDoList)
}

// let eventRegistryTest = []

window.onkeydown = (event) => {
  console.log(event.key);
  if (event.key == 'Enter') {
    handleEnterPress()
  }
};
window.onclick = (event) => {
  console.log("click")
};