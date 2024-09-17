import { getVApp } from "./getVApp";
import { setVApp } from "./setVApp";
import { $rootEl } from "../state/state";
import { updateRootEl } from "./updateRootEl";
import { createVApp } from "./createVApp";
import diff from "./diff";

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
    
}