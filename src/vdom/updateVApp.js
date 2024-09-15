import { getVApp, setVApp, $rootEl, updateRootEl } from "../main";
import { createVApp } from "./createVApp";
import diff from "./diff";
import { checkItemsCompleted } from "./events/eventHelpers/checkItemsCompleted";

export function updateVApp(...toDoList) {

    // Generate the new virtual DOM representation
    const currentVApp = getVApp();
    const vNewApp = createVApp([...toDoList]);

    // Calculate the difference and patch the DOM
    const patch = diff(currentVApp, vNewApp);
    const newRootEl = patch($rootEl);

    // Update the root element and the virtual app state
    updateRootEl(newRootEl);
    setVApp(vNewApp);

    // checks the nubmer of ative items,
    checkItemsCompleted()
}