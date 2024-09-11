import { Input } from "../components/createInput";
import { updateVApp } from "../updateVApp";

export const handleDoubleClickEdit = (event, toDoList) => {
    if (!event.target.classList.contains("label")) { return }
    const listItem = event.target.closest('li');
    if (listItem) {
        // listItem.classList.add("editing")
        //  Get all li elements
        const allItems = Array.from(listItem.parentNode.children);

        // Find the index of the clicked item
        const index = allItems.indexOf(listItem);

        //    Check if the index is within the bounds of the array
        if (index >= 0 && index < toDoList.length) {
            // Use splice to remove the entry at the specific index
            toDoList[index] = Input(listItem.textContent)
            console.log("toDoList", toDoList)
        }
        updateVApp(...toDoList)
    }
    // Now find all input elements inside the list item
    const inputs = document.querySelectorAll('.input-container');
    console.log("inputs before", inputs)
    // Check if there are at least two inputs and select the second one
    if (inputs.length >= 2) {
        const secondInput = inputs[1];  // The second input is at index 1

        // Find the child input element within the second input
        const childInput = secondInput.querySelector('input');

        if (childInput) {
            childInput.focus();    // Focus on the child input field
            childInput.select();   // Select all text in the child input field
        }
    }
    console.log("inputs after", inputs)

};