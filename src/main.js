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



// let eventRegistryTest = []

// window.onkeydown = (event) => {
//   console.log(event.key);
//   if (event.key == 'Enter') {
//     handleEnterPress()
//   }
// };
function removeElementHandler(event, elementClickedOnClassOrId, elementToRemove) {
  if (event.target.classList.contains(elementClickedOnClassOrId) || (event.target.id === elementClickedOnClassOrId)) {
    // Remove the parent element of the target (usually a list item)
    const listItem = event.target.closest(elementToRemove);
    if (listItem) {
      listItem.remove();
    }
  }
}

function addElementHandler(event, elementToAppendToClassOrId, elementToAppend) {
  // Get the current value from the input field
  // let todoInput = document.getElementById("todo-input");
  // let todoInputValue = todoInput.value;
  // if (todoInputValue != "") {
    // Create a new to-do element using the current input value
    // let newToDoElement = render(createListItem(todoInputValue));

    // Find the to-do list element in the DOM
    let toDoListElement = document.getElementsByClassName(elementToAppendToClassOrId)[0];

    // Append the new to-do element to the list
    toDoListElement.appendChild(elementToAppend);

    // Clear the input field by setting its value to an empty string
    // todoInput.value = "";
    // const vNewApp = createVApp(toDoList);
    // const patch = diff(vApp, vNewApp);
    // $rootEl = patch($rootEl);
    // vApp = vNewApp;

    updateURLWithCount(toDoListElement.childElementCount);
    console.log("todoList", toDoList)
  // }
}
window.onkeydown = (event) => {
  if (event.key == "Enter") {
    let todoInput = document.getElementById("todo-input");
    let todoInputValue = todoInput.value;
    if (todoInputValue != "") {
      // Create a new to-do element using the current input value
      let newToDoElement = render(createListItem(todoInputValue));

      // Find the to-do list element in the DOM
      // let toDoListElement = document.getElementsByClassName("todo-list")[0];

      // Append the new to-do element to the list
      // toDoListElement.appendChild(elementToAppend);

      // Clear the input field by setting its value to an empty string
      todoInput.value = "";
      addElementHandler(event, "todo-list", newToDoElement)
    }
  }
}
// function handleEnterPress() {

//   // Get the current value from the input field
//   let todoInput = document.getElementById("todo-input");
//   let todoInputValue = todoInput.value;
//   if (todoInputValue != "") {
//     // Create a new to-do element using the current input value
//     let newToDoElement = render(createListItem(todoInputValue));

//     // Find the to-do list element in the DOM
//     let toDoListElement = document.getElementsByClassName("todo-list")[0];

//     // Append the new to-do element to the list
//     toDoListElement.appendChild(newToDoElement);

//     // Clear the input field by setting its value to an empty string
//     todoInput.value = "";
//     // const vNewApp = createVApp(toDoList);
//     // const patch = diff(vApp, vNewApp);
//     // $rootEl = patch($rootEl);
//     // vApp = vNewApp;

//     updateURLWithCount(toDoListElement.childElementCount);
//     console.log("todoList", toDoList)
//   }

// }


window.onclick = (event) => removeElementHandler(event, "destroy", "li")
// window.onkeydown = (event) => removeElementHandler(event, "destroy", "li")
// window.onclick = (event) => {
//   if (event.target.classList.contains("destroy") || (event.target.id === "destroy")) {
//     // Remove the parent element of the target (usually a list item)
//     const listItem = event.target.closest("li");
//     if (listItem) {
//       listItem.remove();
//     }
//   }
// };