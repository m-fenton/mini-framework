# Mini-Framework

##  Special thanks to:
Rodrigo Pombo  
[Build Your Own React](https://pomb.us/build-your-own-react/)  
YCM Jason  
[Building a Simple Virtual DOM from Scratch](https://dev.to/ycmjason/building-a-simple-virtual-dom-from-scratch-3d05)

Welcome to Mini-Framework, a lightweight and powerful JavaScript framework for building modern web applications. Designed with simplicity and performance in mind, Mini-Framework empowers developers to create dynamic, responsive, and efficient web experiences.

## Does the documentation contain an explanation on how the framework works?

## Abstracting the DOM

The DOM is abstracted using a virtual DOM. Instead of directly manipulating the actual DOM, the createElement function is used to create virtual DOM nodes, which are lightweight JavaScript objects that represent real DOM elements. The render function then transforms these virtual nodes into actual DOM elements, abstracting the complexity of direct DOM manipulation. This approach allows for efficient updates by only modifying the parts of the DOM that have changed.

## Routing system

The routing system manages changes in the URL's hash fragment, which is the part after the # symbol. You provide the system with an object that maps hash values to specific functions. When the hash changes, the corresponding function is called, allowing the page to update based on the new route. To enable navigation, set the `href` of clickable elements to a value like `#/myHash`, and the framework will trigger the associated function when the hash changes. For the default route (`#/`), you can use an empty string as the key. Additionally, event handlers can access the current hash, enabling dynamic updates to the page's appearance and behavior based on the URL, which facilitates creating a single-page application.

## State management

Provide the framework with the initial state of your app, which it wraps in a proxy object. This proxy triggers updates automatically whenever the state changes. The framework compares the current virtual DOM with its previous version using a diffing algorithm and renders any new or changed content.

Here's how it works: when any property of your state object changes, the framework automatically updates the actual DOM. A diff function compares the updated virtual DOM with the previous one and returns a patch function, which applies the necessary changes to the real DOM. If your app is named `app`, the `updateVapp` function passes the root DOM node to the patch function, which then updates the DOM, rendering new elements and placing them in the correct position.

## Event handling

This custom event handling system centralizes the registration and execution of event handlers for various event types (e.g., `keydown`, `click`, `dblclick`). It allows developers to associate specific functions with events using a simple registration process. When an event occurs, global listeners capture it, pass it to a handler, and trigger the relevant registered functions. The system uses a diff approach to ensure the actual DOM is updated efficiently based on the state changes, making it highly responsive and suitable for building interactive applications.