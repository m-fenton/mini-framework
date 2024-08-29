import { updateVApp } from "../updateVApp";

export const handleClickDelete = (event, toDoList) => {

  console.log("event.target", event.target)
  if (event.target.classList.contains("destroy")) {
    const listItem = event.target.closest('li');
    if (listItem) {
      // Get all li elements
      const allItems = Array.from(listItem.parentNode.children);

      // Find the index of the clicked item
      const index = allItems.indexOf(listItem);
      console.log("toDoList[index]", toDoList[index])

      console.log(`Clicked item index: ${index}`);
      // Check if the index is within the bounds of the array
      if (index >= 0 && index < toDoList.length) {
        // Use splice to remove the entry at the specific index
        toDoList.splice(index, 1);
        console.log(toDoList)
      }
      updateVApp(...toDoList)
    }
  }

};
