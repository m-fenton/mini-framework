const handleClickDelete = (event) => {
    const deleteButton = event.target;
    const item = deleteButton.closest('.todo-item');

    item.remove();

    console.log(`Item ${item.id} deleted`);
};

// Example of registering the event
registerEvent('click', '.delete-button', handleClickDelete);
