import createElement from './vdom/createElement';
import render from './vdom/render';
import mount from './vdom/mount';
import diff from './vdom/diff';

const createVApp = count => createElement('section', {
  attrs: {
    class: 'todoapp',
    id: 'root',
    dataCount: count, // we use the count here
  
  },
  children: [
    createElement('header', {
      attrs: {
        class:'header', 
        class:'todo-list'
      },
      children: [
        createElement('h1', {
          children: [
            "todos",
          ],
        }),
        createElement('input', {
          attrs: {
            class: 'new-todo', 
            placeholder: 'What needs to be done?',
            autofocus: true,
          },
        }),
      ],
      
    }),
    createElement('main', {
    }),
    createElement('footer', {
    }),
  ],
  
});

let vApp = createVApp(0);
const $app = render(vApp);
let $rootEl = mount($app, document.getElementById('app'));

// Use window keydown event to capture Enter key globally
window.onkeydown = (event) => { 
  if (event.key === 'Enter') { // Check if the Enter key was pressed
    const $input = document.querySelector('.new-todo');

    if ($input && $input.value) {
      console.log($input.value); // Log the value of the input
    }
  }
}

// Diff and patch logic (unchanged)
const n = Math.floor(Math.random() * 10);
const vNewApp = createVApp(n);
const patch = diff(vApp, vNewApp);

// we might replace the whole $rootEl,
// so we want the patch will return the new $rootEl
$rootEl = patch($rootEl);

