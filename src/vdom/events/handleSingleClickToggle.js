const handleSingleClickToggle = (event) => {
    const checkbox = event.target;
    const item = checkbox.closest('.todo-item');

    if (checkbox.checked) {
        item.classList.add('completed');
    } else {
        item.classList.remove('completed');
    }

    console.log(`Item ${item.id} marked as ${checkbox.checked ? 'completed' : 'not completed'}`);
};

// Example of registering the event
//registerEvent('click', '.todo-checkbox', handleSingleClickToggle);
