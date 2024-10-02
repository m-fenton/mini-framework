export const handleClickToggleCompletedAll = (event) => {
    // Check if the click event is on the button or label with class "toggle-all-label"
    if (!event.target.classList.contains("toggle-all-label")) {
        return; // Exit if the click is not on the relevant button/label
    }

    // Select all <li> elements inside the <ul> with the class "todo-list"
    let todoListItems = document.querySelectorAll('.todo-list li');
    const toDoCountElement = document.querySelector(".todo-count")

    // Determine if all items have the class "completed"
    const allCompleted = Array.from(todoListItems).every(item => item.classList.contains('completed'));
    
    // Select all checkboxes within the todo list
    const checkboxes = document.querySelectorAll('.toggle');

    // If all items are completed, remove the "completed" class from all
    if (allCompleted) {
        todoListItems.forEach(item => item.classList.remove('completed'));
        checkboxes.forEach(checkbox => {
            checkbox.checked = false; // Uncheck all checkboxes
        });
        let newNum = Number(todoListItems.length)
        let newStr = newNum + " items left!"
        toDoCountElement.textContent = newStr
    } else {
        // Otherwise, add the "completed" class to all items
        todoListItems.forEach(item => item.classList.add('completed'));
        checkboxes.forEach(checkbox => {
            checkbox.checked = true; // Check all checkboxes
        });
        let newNum = Number(0)
        let newStr = newNum + " items left!"
        toDoCountElement.textContent = newStr
    }
};