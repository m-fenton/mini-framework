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
import { addElementHandler } from './dom/addElementHandler';
import { removeElementHandler } from './dom/removeElementHandler';
import { obtainNumberOfToDoItems } from './dom/obtainNumberOfToDOItems';

let number = 0
let toDoList = []

const createVApp = (toDoList) => {
  console.log("Creating vApp with toDoList:", toDoList);
  return createElement('div', {
    attrs: {
      id: 'root',
      class: 'todoapp',
    },
    children: [
      createHeader(),
      createMain(toDoList),
      createFooter(toDoList.length)
    ],

  });

}
let vApp = createVApp(toDoList);
const $app = render(vApp);
let $rootEl = mount($app, document.getElementById('root'));
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

// Example of a specific event handler
function handleImageClick(toDoList, event) {
  console.log("Before update:", toDoList);
  if (event.target.value != "") {
    let toDoItem = createListItem(event.target.value)
    toDoList.unshift(toDoItem)
    // const vNewApp = createVApp(toDoList);
    const vNewApp = createVApp(toDoList);
    const patch = diff(vApp, vNewApp);
    $rootEl = patch($rootEl);
    console.log("After update:", toDoList);
    console.log('Actual DOM after patch:', $rootEl.innerHTML);
    vApp = vNewApp;

    console.log('vNewApp after patch:', vNewApp);

    updateURLWithCount(toDoList.length);
  }
}
$rootEl.addEventListener('click', (event) => handleImageClick(toDoList, event));


// window.onkeydown = (event) => {
//   if (event.key == "Enter") {
//     let todoInput = document.getElementById("todo-input");
//     let todoInputValue = todoInput.value;
//     if (todoInputValue != "") {
//       // Create a new to-do element using the current input value
//       let newToDoElement = render(createListItem(todoInputValue));

//       // Clear the input field by setting its value to an empty string
//       todoInput.value = "";
//       addElementHandler(event, "todo-list", newToDoElement)
//       number = obtainNumberOfToDoItems()
//       console.log(number)
//     }
//   }
// }

// window.onclick = (event) => removeElementHandler(event, "destroy", "li")



