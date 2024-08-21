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

const createVApp = (number) => createElement('div', {
  attrs: {
    id: 'root',
    class: 'todoapp',
  },
  children: [
    createHeader(),
    createMain(),
    createFooter(number),
  ],

});

let vApp = createVApp(number);
const $app = render(vApp);
let $rootEl = mount($app, document.getElementById('root'));

window.onkeydown = (event) => {
  if (event.key == "Enter") {
    let todoInput = document.getElementById("todo-input");
    let todoInputValue = todoInput.value;
    if (todoInputValue != "") {
      // Create a new to-do element using the current input value
      let newToDoElement = render(createListItem(todoInputValue));

      // Clear the input field by setting its value to an empty string
      todoInput.value = "";
      addElementHandler(event, "todo-list", newToDoElement)
      number = obtainNumberOfToDoItems()
      console.log(number)
    }
  }
}

window.onclick = (event) => removeElementHandler(event, "destroy", "li")


// Example of a specific event handler
// function handleImageClick() {
//   const vNewApp = createVApp(toDoList);
//   const patch = diff(vApp, vNewApp);
//   $rootEl = patch($rootEl);
//   vApp = vNewApp;
//   updateURLWithCount(toDoList.length);
// }
// $rootEl.addEventListener('click', handleImageClick);
