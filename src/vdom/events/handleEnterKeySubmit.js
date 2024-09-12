import { toDoList } from "../../main";
import { createListItem } from "../components/createListItem";
import { updateVApp } from "../updateVApp";

import { routing } from "../routing/routing";

export const handleEnterKeySubmit = (event) => {
  // Early return if the key pressed is not "Enter"
  if (event.key !== "Enter") return;
  const inputContainers = document.querySelectorAll('.input-container');
  // Check if there's only one input
  if (inputContainers.length == 1) {
    const input = inputContainers[0].querySelector('input');
    const todoInputValue = input.value.trim();
    console.log("todoInputValue", todoInputValue)
    // Early return if the input value is empty
    if (!todoInputValue) return;

    const toDoItem = createListItem(todoInputValue);
    toDoList.push(toDoItem);

    // updateVApp
    updateVApp(...toDoList)

    input.value = "";
    return
  }
  if (inputContainers.length == 2) {
    const secondInputContainer = inputContainers[1];  // The second input is at index 1

    // Find the child input element within the second input
    const input = secondInputContainer.querySelector('input');

    if (input) {
      console.log("toDoList", toDoList)
      console.log("secondInputContainer", secondInputContainer)

      const index = toDoList.findIndex(item => item.tagName === "div");
      console.log("index", index)

      toDoList[index] = createListItem(input.value)
      updateVApp(...toDoList)
    };
  }
};