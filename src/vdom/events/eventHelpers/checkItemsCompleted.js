export function checkItemsCompleted() {
    const toDoCountElement = document.querySelector(".todo-count")
    let todoListItems = document.querySelectorAll('.todo-list li');
    let todoNum = Number(todoListItems.length)
    todoListItems.forEach(item => {
        if (item.classList.contains('completed')) {
            todoNum--
        }
    });
    let newStr = todoNum + " items left!"
    toDoCountElement.textContent = newStr
}
