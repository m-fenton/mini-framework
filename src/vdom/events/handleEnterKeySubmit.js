import { toDoList } from "../../main";
import { createListItem } from "../components/createListItem";
import { updateVApp } from "../updateVApp";

export const handleEnterKeySubmit = (event) => {
  // Early return if the key pressed is not "Enter"
  if (event.key !== "Enter") return;

  const todoInput = document.getElementById("todo-input");
  const todoInputValue = todoInput?.value.trim();  // Use optional chaining and trim for extra safety

  // Early return if the input value is empty
  if (!todoInputValue) return;

  // Create a new to-do item and add it to the list
  const toDoItem = createListItem(todoInputValue);
  toDoList.push(toDoItem);

  // updateVApp
  updateVApp(...toDoList)

  // Clear the input field after processing the entry
  todoInput.value = "";

};