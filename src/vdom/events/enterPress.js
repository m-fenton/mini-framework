import { getVApp, setVApp, updateRootEl, $rootEl, toDoList } from "../../main";
import { createVApp } from "../createVApp";
import diff from "../diff";
import { updateURLWithCount } from "../routing/updateURLWithCount";
import { createListItem } from "../components/createListItem";

export const enterPress = (event) => {
  // Early return if the key pressed is not "Enter"
  if (event.key !== "Enter") return;

  const todoInput = document.getElementById("todo-input");
  const todoInputValue = todoInput?.value.trim();  // Use optional chaining and trim for extra safety

  // Early return if the input value is empty
  if (!todoInputValue) return;

  // Create a new to-do item and add it to the list
  const toDoItem = createListItem(todoInputValue);
  toDoList.push(toDoItem);

  // Generate the new virtual DOM representation
  const currentVApp = getVApp();
  const vNewApp = createVApp([...toDoList]);

  // Calculate the difference and patch the DOM
  const patch = diff(currentVApp, vNewApp);
  const newRootEl = patch($rootEl);

  // Update the root element and the virtual app state
  updateRootEl(newRootEl);
  setVApp(vNewApp);

  // Update the URL with the current count of to-do items
  updateURLWithCount(toDoList.length);

  // Clear the input field after processing the entry
  todoInput.value = "";

};