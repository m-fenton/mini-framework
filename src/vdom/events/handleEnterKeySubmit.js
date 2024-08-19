import registerEvent from "../registerEvent";

const handleEnterKeySubmit = (event) => {
    if (event.key === 'Enter') {
        // Trigger the submit action
        console.log('Submit action triggered by Enter key');
        // Add your logic for adding the item to the list
    }
};

// Example of registering the event
//registerEvent('keydown', 'todo-input', handleEnterKeySubmit);
//registerEvent('keydown', 'label', handleEnterKeySubmit);

// Only instances of using enter key should be upon submitting a task from todo-input
// And hitting enter to submit edit to task after double-clicking to edit
