import createElement from './vdom/createElement';
import render from './vdom/render';
import mount from './vdom/mount';
import diff from './vdom/diff';

const createVApp = count => createElement('div', {
  attrs: {
    id: 'root',
    class: 'todoapp',
    // dataCount: count, // we use the count here
  },
  children: [
    'The current count is: ',
    String(count), // and here
    ...Array.from({ length: count }, () => createElement('img', {
      attrs: {
        src: 'https://media.giphy.com/media/cuPm4p4pClZVC/giphy.gif',
      },
    })),
  ],
});
let count = 1
let vApp = createVApp(count);
const $app = render(vApp);
let $rootEl = mount($app, document.getElementById('root'));

// Example of a specific event handler
function handleImageClick() {
  count++;
  const vNewApp = createVApp(count);
  const patch = diff(vApp, vNewApp);
  $rootEl = patch($rootEl);
  vApp = vNewApp;
}

$rootEl.addEventListener('click', handleImageClick);
// let $rootEl = mount($app, document.getElementById('app'));

// setInterval(() => {
//   const n = Math.floor(Math.random() * 10);
//   const vNewApp = createVApp(n);
//   const patch = diff(vApp, vNewApp);

//   // we might replace the whole $rootEl,
//   // so we want the patch will return the new $rootEl
//   $rootEl = patch($rootEl);

//   vApp = vNewApp;
// }, 1000);
