import { createListItem } from "../components/createListItem";
import createElement from "../createElement";
import { updateVApp } from "../updateVApp";

export const handleDoubleClickEdit = (event, toDoList) => {
    if (!event.target.classList.contains("label")) { return }
    const listItem = event.target.closest('li');
    if (listItem) {
console.log("How am I going to handle this?")
        // listItem.classList.add("editing")
        // Get all li elements
        // const allItems = Array.from(listItem.parentNode.children);

        // // Find the index of the clicked item
        // const index = allItems.indexOf(listItem);

        // Check if the index is within the bounds of the array
    //     if (index >= 0 && index < toDoList.length) {
    //         // Use splice to remove the entry at the specific index
    //         //toDoList[index] = createInputBox(listItem.textContent)
    //         console.log("toDoList", toDoList)
    //     }
    //     updateVApp(...toDoList)
    }

};