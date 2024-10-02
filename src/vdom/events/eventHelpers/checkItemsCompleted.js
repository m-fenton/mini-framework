export function checkItemsCompleted() {
    const toDoCountElement = document.querySelector(".todo-count")
    let todoListItems = document.querySelectorAll('.todo-list li');
    todoListItems.forEach(item => {
        if (item.classList.contains('completed')) {
            let newNum = Number(toDoCountElement.textContent.split(" ")[0]) - 1
            let newStr = newNum + " items left!"
            toDoCountElement.textContent = newStr
        }
    });
}
