import { getVApp, setVApp, createVApp, $rootEl, toDoList } from "../../main";
import { updateRootEl } from "../../main";
import diff from "../diff";
import { updateURLWithCount } from "../routing/updateURLWithCount";
import { createListItem } from "../components/createListItem";

export const enterPress = (event) => {
  if (event.key === "Enter") {
    let todoInput = document.getElementById("todo-input");
    let todoInputValue = todoInput.value;

    if (todoInputValue !== "") {
      let toDoItem = createListItem(todoInputValue);
      toDoList.push(toDoItem);  // or unshift, depending on your preference

      const currentVApp = getVApp();
      // console.log("Current vApp:", currentVApp);

      const vNewApp = createVApp([...toDoList]);  // Create a new array to ensure immutability
      // console.log("New vApp:", vNewApp);

      const patch = diff(currentVApp, vNewApp);
      const newRootEl = patch($rootEl);
      
      updateRootEl(newRootEl);
      setVApp(vNewApp);
      
      // console.log("Updated vApp:", getVApp());
      
      updateURLWithCount(toDoList.length);

      todoInput.value = ""; // Clear input field after adding item
    }
  }
};