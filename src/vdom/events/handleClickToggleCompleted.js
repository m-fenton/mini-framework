
export const handleClickToggleCompleted = (event) => {

    if (!event.target.classList.contains("toggle")) { return }


    const toDoCountElement = document.querySelector(".todo-count")

    const listItem = event.target.closest('li');
    if (listItem) {
        if (!listItem.classList.contains("completed")) {
            listItem.classList.add("completed")
            let newNum = Number(toDoCountElement.textContent.split(" ")[0]) -1
            let newStr = newNum + " items left!"
            toDoCountElement.textContent = newStr

        } else {
            listItem.classList.remove("completed")
            let newNum = Number(toDoCountElement.textContent.split(" ")[0]) + 1
            let newStr = newNum + " items left!"
            toDoCountElement.textContent = newStr
        }
    }
}


