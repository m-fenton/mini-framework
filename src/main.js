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

  // Get the current value from the input field
  let todoInput = document.getElementById("todo-input");
  let todoInputValue = todoInput.value;
  if (todoInputValue != "") {
    // Create a new to-do element using the current input value
    let newToDoElement = render(createListItem(todoInputValue));

    // Find the to-do list element in the DOM
    let toDoListElement = document.getElementsByClassName("todo-list")[0];

    // Append the new to-do element to the list
    toDoListElement.appendChild(newToDoElement);

    // Clear the input field by setting its value to an empty string
    todoInput.value = "";
    // const vNewApp = createVApp(toDoList);
    // const patch = diff(vApp, vNewApp);
    // $rootEl = patch($rootEl);
    // vApp = vNewApp;

    updateURLWithCount(toDoListElement.childElementCount);
    console.log("todoList", toDoList)
  }

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