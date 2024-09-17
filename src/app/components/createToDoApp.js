import { createHeader } from "../../app/components/createHeader";
import { createMain } from "../../app/components/createMain";
import { createFooter } from '../../app/components/createFooter';

export const vToDoApp = (toDoList) => {
    return {
        tagName: 'div',
        attrs: {
            id: 'root',
            class: 'todoapp',
        },
        children: [
            createHeader(),
            createMain([...toDoList]),  
            ...(toDoList.length > 0 ? [createFooter(toDoList.length)] : [])], //Only runs createFooter if toDoList has a length, this acts to hide the footer unless it's needed
    };
};