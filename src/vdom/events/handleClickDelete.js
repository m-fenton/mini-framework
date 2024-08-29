export const handleClickDelete = (event, todoList) => {
  // const deleteButton = event.target;
  // const item = deleteButton.closest('.todo-item');
  console.log("event.target", event.target)
  if (event.target.classList.contains("destroy")) {
    console.log("DESTROY");
}

  const listItem = event.target.closest('li');
  if (listItem) {
    // Get all li elements
    const allItems = Array.from(listItem.parentNode.children);

    // Find the index of the clicked item
    const index = allItems.indexOf(listItem);
    console.log("todoList[index]", todoList[index])

    console.log(`Clicked item index: ${index}`);

    // Your existing delete logic here
    // ...
  }

  // item.remove();

  // console.log(`Item ${item.id} deleted`);
};
