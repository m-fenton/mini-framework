const handleEnterKeySubmit = (event) => {
    if (event.key === 'Enter') {
        // Trigger the submit action
        console.log('Submit action triggered by Enter key');
        // Add your logic for adding the item to the list
    }
};

// Example of registering the event
registerEvent('keydown', 'todo-input', handleEnterKeySubmit);
