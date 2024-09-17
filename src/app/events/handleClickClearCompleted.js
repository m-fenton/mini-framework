import minion from "../../minion/framework";

export const handleClickClearCompleted = (event, toDoList) => {
    if (!event.target.classList.contains("clear-completed")) { return }
    // Select all <li> elements inside the <ul> with the class "todo-list"
    let todoListItems = document.querySelectorAll('.todo-list li');

    // Initialize an empty array to store the indices of completed items
    const completedItemIndices = [];

    // Loop through each <li> element
    todoListItems.forEach((item, index) => {
        // Check if the item has the class "completed"
        if (item.classList.contains('completed')) {
            // If it does, push the index to the array
            completedItemIndices.push(index);
            item.classList.remove("completed")
        }
    });


    // Sort the completed indices in descending order
    // This is important to avoid index shifts when removing items
    completedItemIndices.sort((a, b) => b - a);

    // Remove items from toDoList based on the indices in completedItemIndices
    completedItemIndices.forEach(index => {
        toDoList.splice(index, 1);
    });

    // Log the array of indices to the console
   minion.updateVApp(...toDoList)

    // Select all checkboxes with class "toggle"
    const checkboxes = document.querySelectorAll('.toggle');

    // Iterate over each checkbox and set its `checked` property to false
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
}

