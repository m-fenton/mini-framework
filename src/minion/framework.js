import render from './core/render'
import mount from './dom/mount';
import { createVApp } from './core/createVApp';
import createElement from './core/createElement';
import { handleEvent } from './eventHandling/handleEvent';
import { registerEvent } from './eventHandling/registerEvent';
import { routing } from './routing/routing';
import { getVApp } from './core/getVApp';
import { setVApp } from './core/setVApp';
import { updateVApp } from './core/updateVApp';
import { updateRootEl } from './core/updateRootEl';


// Creates the framework object
const minion = {
    render,
    mount,
    createVApp,
    getVApp,
    setVApp,
    updateVApp,
    updateRootEl,
    createElement,
    registerEvent,
    handleEvent,
    routing
};

// Export the whole framework as a single object
export default minion;
