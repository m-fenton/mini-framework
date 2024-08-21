import { createListItem } from "./components/createListItem"

// let toDoListElement = document.getElementsByClassName("todo-list")


export function addListItem(toDoString) {
    console.log(createListItem(toDoString))
}