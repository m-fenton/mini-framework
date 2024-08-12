import diff from './diff';
import createVApp from '../main'; // Import the function to recreate the vDOM

let count = 0;

export function handleImageClick(vApp, $rootEl) {
    count++;
    const vNewApp = createVApp(count);
    const patch = diff(vApp, vNewApp);
    $rootEl = patch($rootEl);
    return { vApp: vNewApp, $rootEl };
}

export function resetCount() {
    count = 0;
}
