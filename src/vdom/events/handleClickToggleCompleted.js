
export const handleClickToggleCompleted = (event) => {

    if (!event.target.classList.contains("toggle")) { return }


    const toDoCountElement = document.querySelector(".todo-count")
    console.log("toDoCountElement.textContent",toDoCountElement.textContent)
    console.log("toDoCountElement.textContent[0]",toDoCountElement.textContent[0])

    const listItem = event.target.closest('li');
    if (listItem) {
        if (!listItem.classList.contains("completed")) {
            listItem.classList.add("completed")
            let newNum = Number(toDoCountElement.textContent[0]) -1
            let newStr = newNum + " items left!"
            toDoCountElement.textContent = newStr

        } else {
            listItem.classList.remove("completed")
            let newNum = Number(toDoCountElement.textContent[0]) + 1
            let newStr = newNum + " items left!"
            toDoCountElement.textContent = newStr
        }
    }
}


