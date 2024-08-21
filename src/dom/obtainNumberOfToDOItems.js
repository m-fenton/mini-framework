export function obtainNumberOfToDoItems() {

    let toDoListElement = document.getElementsByClassName("todo-list")[0];
    if (toDoListElement.childElementCount != undefined) {
        return toDoListElement.childElementCount
    }
    return 0
}