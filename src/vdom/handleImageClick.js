import diff from './diff';
import createVApp from '../main'; // Import the function to recreate the vDOM

let count = 0;

// Example of a specific event handler
export function handleImageClick() {
    const vNewApp = createVApp(toDoList);
    const patch = diff(vApp, vNewApp);
    $rootEl = patch($rootEl);
    vApp = vNewApp;
    updateURLWithCount(toDoList.length);
  }

export function resetCount() {
    count = 0;
}
