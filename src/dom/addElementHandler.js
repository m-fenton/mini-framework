import { updateURLWithCount } from "../vdom/updateURLWithCount";

export function addElementHandler(event, elementToAppendToClassOrId, elementToAppend) {
    // Find the to-do list element in the DOM
    let toDoListElement = document.getElementsByClassName(elementToAppendToClassOrId)[0];

    // Append the new to-do element to the list
    toDoListElement.appendChild(elementToAppend);
    updateURLWithCount(toDoListElement.childElementCount);
}