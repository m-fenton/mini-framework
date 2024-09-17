import minion from "../../minion/framework";
import { createListItem } from "../components/createListItem";
import { checkItemsCompleted } from "./checkItemsCompleted";

import { toDoList } from "../main";

export const handleEnterKeySubmit = (event) => {

  // Early return if the key pressed is not "Enter"
  if (event.key !== "Enter") return;
  const inputContainers = document.querySelectorAll('.input-container');
  // Check if there's only one input
  if (inputContainers.length == 1) {
    const input = inputContainers[0].querySelector('input');
    const todoInputValue = input.value.trim();
    // Early return if the input value is empty
    if (!todoInputValue) return;

    const toDoItem = createListItem(todoInputValue);
    toDoList.push(toDoItem);

    // minion.updateVApp
    minion.updateVApp(...toDoList)

    input.value = "";

  }
  if (inputContainers.length == 2) {
    const secondInputContainer = inputContainers[1];  // The second input is at index 1

    // Find the child input element within the second input
    const input = secondInputContainer.querySelector('input');

    if (input) {
      const index = toDoList.findIndex(item => item.tagName === "div");

      toDoList[index] = createListItem(input.value)
      minion.updateVApp(...toDoList)
    };
  }

  // Double checks number of active items when a new item is added
  checkItemsCompleted()


  // rerunning minion.routing ensures that new active items are hidden if we're on the completed tab
  minion.routing()

};