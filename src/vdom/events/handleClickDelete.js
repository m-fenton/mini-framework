const handleClickDelete = (event, todoList) => {
    const deleteButton = event.target;
    const item = deleteButton.closest('.todo-item');


    if (listItem) {
        // Get all li elements
        const allItems = Array.from(listItem.parentNode.children);
        
        // Find the index of the clicked item
        const index = allItems.indexOf(listItem);
        
        console.log(`Clicked item index: ${index}`);
        console.log(`This is the ${index + 1}${getOrdinalSuffix(index + 1)} item`);
        
        // Your existing delete logic here
        // ...
      }

    item.remove();

    console.log(`Item ${item.id} deleted`);
};

// Example of registering the event
registerEvent('click', '.delete-button', handleClickDelete);
