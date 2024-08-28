import { createHeader } from "./components/createHeader";
import { createMain } from "./components/createMain";
import { createFooter } from './components/createFooter';

export const createVApp = (toDoList) => {
    return {
        tagName: 'div',
        attrs: {
            id: 'root',
            class: 'todoapp',
        },
        children: [
            createHeader(),
            createMain([...toDoList]),  // Create a new array to ensure immutability
            ...(toDoList.length > 0 ? [createFooter(toDoList.length)] : [])], //Only runs createFooter if toDoList has a length, this acts to hide the footer unless it's needed
    };
};