import { Input } from "../components/createInput";
import { createListItem } from "../components/createListItem";
import { updateVApp } from "../updateVApp";

export const handleDoubleClickEdit = (event, toDoList) => {

    let index
    if (!event.target.classList.contains("label")) { return }
    const listItem = event.target.closest('li');
    if (listItem) {
        //  Get all li elements
        const allItems = Array.from(listItem.parentNode.children);

        // Find the index of the clicked item
         index = allItems.indexOf(listItem);

        //    Check if the index is within the bounds of the array
        if (index >= 0 && index < toDoList.length) {
            // Use splice to alter the entry at the specific index
            toDoList[index] = Input(listItem.textContent)
            console.log("toDoList.length", toDoList.length)
        }
        updateVApp(...toDoList)
    }
    // Now find all input elements inside the list item
    const inputContainers = document.querySelectorAll('.input-container');
    // Check if there are at least two inputs and select the second one
    if (inputContainers.length >= 2) {
        const secondInputContainers = inputContainers[1];  // The second input is at index 1

        // Find the child input element within the second input
        const input = secondInputContainers.querySelector('input');

        if (input) {
            input.focus();    // Focus on the child input field
            input.select();   // Select all text in the child input field
            input.onblur = function () {
                toDoList[index] = createListItem(input.value)
                updateVApp(...toDoList)
            };
        }
    }

};