import render from './core/render'
import mount from './dom/mount';
import { createVApp } from './core/createVApp';
import createElement from './core/createElement';
import { registerEvent } from './eventhandling/registerEvent';
import { handleEvent } from './eventhandling/handleEvent';
import { routing } from './routing/routing';


// Creates the framework object
const minion = {
    render,
    mount,
    createVApp,
    createElement,
    handleEvent,
    registerEvent,
    routing
};

// Export the whole framework as a single object
export default minion;
