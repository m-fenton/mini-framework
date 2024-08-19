export const handleClickDelete = (event) => {
    console.log("event", event)
    const deleteButton = event.target;
    console.log("event.target", event.target)
    console.log("delete button", deleteButton)
    const item = deleteButton.closest('li');

    console.log("do we get here?")

    if (item) {
        item.remove();
        console.log(`Item ${item.id} deleted`);
    } else {
        console.error('Item not found');
    }
};

// Example of registering the event
//registerEvent('click', 'destroy', handleClickDelete);

// This is the only instance of usage of this function. Upon deleting task usinghte x button.
// If there is an error try a .destroy instead