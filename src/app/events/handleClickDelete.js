import minion from "../../minion/minion";
import { checkItemsCompleted } from "./checkItemsCompleted";

export const handleClickDelete = (event, toDoList) => {

  if (!event.target.classList.contains("destroy")) { return }
  const listItem = event.target.closest('li');
  if (listItem) {

    // Get all li elements
    const allItems = Array.from(listItem.parentNode.children);

    // Find the index of the clicked item
    const index = allItems.indexOf(listItem);

    // Check if the index is within the bounds of the array
    if (index >= 0 && index < toDoList.length) {
      // Use splice to remove the entry at the specific index
      toDoList.splice(index, 1);
      console.log(toDoList)
    }
    // This cheeky line solves a bug where the completed class was
    // incorrectly getting applied to the next item on the list
    listItem.remove();
    minion.updateVApp(...toDoList)
  }

  checkItemsCompleted()
}


