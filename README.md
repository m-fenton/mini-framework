# 🚀 Mini-Framework



Welcome to Mini-Framework, a lightweight and powerful JavaScript framework for building modern web applications. Designed with simplicity and performance in mind, Mini-Framework empowers developers to create dynamic, responsive, and efficient web experiences.

## ✨ Features

- 🌳 Virtual DOM for optimal rendering performance
- 🧭 Intuitive routing system for seamless navigation
- 🗃️ Robust state management for complex applications
- 🎭 Custom event handling for interactive UIs
- 🛠️ Minimal setup, maximum flexibility


# Table of Contents
- [Overview](#overview)
- [Explanation and code examples](#explanation-and-code-examples)
- [How does the framework work](#how-does-the-framework-work)



## DOCUMENTATION

### OVERVIEW  
We have developed a custom JavaScript framework from scratch, designed to offer a simple yet flexible approach to building web applications. The framework implements these key features:

**DOM Abstraction:** Simplifies interaction with the Document Object Model (DOM) by abstracting direct manipulation, allowing developers to define elements and their behavior declaratively.

**Routing System:** Enables easy synchronization between the application state and the URL, facilitating navigation between different views or pages without the need for a full-page refresh.

**State Management:** Provides a system to manage the application's state efficiently, ensuring that data remains consistent across different components and user actions.

**Event Handling:** Offers a custom event-handling mechanism that registers and triggers events, such as clicks, input changes, and custom actions, without relying on traditional event listeners like addEventListener.

This framework aims to offer an intuitive development experience by abstracting complex tasks and providing reusable patterns for common web app functionality.




### EXPLANATION AND CODE EXAMPLES

**CREATING AN ELEMENT**

In our framework, creating an element is done using a function that generates a virtual DOM (vDOM) element. Instead of directly interacting with the real DOM, we first create a virtual representation of the element, which makes it easier to manipulate and update efficiently.

#### Code Example for Creating an Element:

`const divElement = createElement('div');`

#### Explanation: 

`'div'`: This is the HTML tag of the element being created. In this case, it's a div.

#### The Virtual Representation:  

This example creates a virtual element that represents the following HTML structure:

`<div></div>`


**ADDING ATTRIBUTES TO AN ELEMENT**

In addition to creating basic elements, you can also add attributes such as id, class, and other HTML attributes when generating the virtual DOM element. Here's how you can add attributes to your element.

#### Code Example for Creating an Element with Attributes:

    const divElement = createElement('div', {
      attrs: {
        id: 'myDiv',
        class: 'container',
      }
    });

#### Explanation:  
`'div'`: This is the HTML tag of the element being created, which is a div in this case.  
`attrs:` This property contains a set of key-value pairs representing the attributes you want to apply to the element. Here, we are adding:  
`id: 'myDiv'`: Adds an id attribute to the div.  
`class: 'container'`: Adds a class attribute to the div.  

#### The Virtual Representation:  

This example creates a virtual element that represents the following HTML structure:

`<div id="myDiv" class="container"></div>`

#### Explanation of Attributes:  

In the attrs object, any valid HTML attributes can be included, making it flexible and easy to customize your elements.


**NESTING ELEMENTS**  

Nesting elements allows you to build complex structures by placing child elements inside parent elements. In our framework, you can nest elements by passing them as children to their parent element.

#### Code Example for Nesting Elements:

    const divElement = createElement('div', {
      attrs: {
        id: 'parentDiv',
     class: 'container',
      },
      children: [
        createElement('p', {
          attrs: {
            class: 'text',
          },
          children: ['This is a paragraph inside the div.']
        }),
        createElement('button', {
          attrs: {
            class: 'btn',
            type: 'button'
          },
           children: ['Click me']
        })
      ]
    });

#### Explanation:  

`'div'`: The parent element, in this case, is a div with the id of parentDiv and a class of container.  
`children:` This property contains an array of child elements. In this example, the div has two child elements:  
`p:` A paragraph (p) element with a class of text and the content 'This is a paragraph inside the div.'.  
`button:` A button element with the class 'btn', the type 'button', and the text 'Click me'.  


#### The Virtual Representation:

This example creates a virtual element that represents the following HTML structure:

    <div id="parentDiv" class="container">
      <p class="text">This is a paragraph inside the div.</p>
      <button class="btn" type="button">Click me</button>
    </div>

#### Explanation of Nesting:

`children:` Allows you to nest any number of elements inside the parent element. Each child element can also have its own attrs and children, enabling deep hierarchies.


**CREATING AND HANDLING EVENTS**  

In our framework, event handling is done using a custom system that allows us to manage event listeners without directly relying on native event handling methods like addEventListener. Events are registered globally using window event handlers, and custom functions are used to trigger the appropriate event handlers based on the event type.

#### Here’s how you can work with the event system:


Let's update the documentation to include the new information about how global event handlers are set up. We will still follow the previous structure but now emphasize the use of global event handlers for triggering events.

#### Creating and Handling Events  

In our framework, event handling is done using a custom system that allows us to manage event listeners without directly relying on native event handling methods like addEventListener. Events are registered globally using window event handlers, and custom functions are used to trigger the appropriate event handlers based on the event type.

Here’s how you can work with the event system:

1. **registerEvent**   
This function allows you to register event handlers for specific event types (e.g., 'click', 'keydown').

If multiple events are triggered by an action (`click`, `onkeydown`, etc,) then you may need to distiguish between them at a handler level, for example:  

`if (event.key !== "Enter") return;`


#### Usage Example:

    registerEvent('click', (event) => {
      console.log('Button clicked!');
    });




2. **handleEvent**  
The handleEvent function is a global handler that gets triggered for different event types like click, keydown, or dblclick. This function extracts the event type and uses triggerEvent to run all the registered event handlers for that event type.

#### Usage Example:

    window.onclick = handleEvent;  // Handle click events globally
    window.onkeydown = handleEvent; // Handle keydown events globally
    window.ondblclick = handleEvent; // Handle double click events globally


3. **triggerEvent**  
This function is responsible for calling all the handlers associated with a given event type. It retrieves the list of handlers from the eventRegistry and runs each one with the event object.

#### Usage Example:

    triggerEvent('click', { type: 'click', target: someElement });



#### Full Example:  

**Registering and Handling a click Event**  

Here’s a complete example showing how to register a click event and handle it using the global event handlers:

    // Register a click event
    registerEvent('click', (event) => {
      console.log(`Button clicked! Target: ${event.target}`);
    });

    // Global event handlers
    window.onclick = handleEvent;

#### Explanation:

**Registering the Event:**  
We register a handler for the click event using `registerEvent()`. The handler logs the target element of the click.

**Handling Global Events:**  
By setting `window.onclick = handleEvent`, we ensure that every time a click happens anywhere in the document, the handleEvent function gets called. It then triggers any click handlers that have been registered.

#### Explanation of the Event Flow:  
**Global Listener:**  
You set global listeners (`window.onclick`, `window.onkeydown`, etc.) that funnel all events through the handleEvent function.

**Event Triggering:**  
When an event occurs (e.g., a user clicks), the event is passed to the handleEvent function.

**Event Matching:**  
The handleEvent function looks at the event's type (e.g., 'click') and calls triggerEvent to execute all handlers registered for that event.

**Handler Execution:**  
The event handlers registered for that event type are executed, and any custom behavior (e.g., logging, deleting an item) is performed.

This setup allows for flexible, modular event handling and abstracts away the need to attach specific listeners to DOM elements manually. Instead, everything is handled globally via the window object and custom event handlers.



## How does the framework work?

## Abstracting the DOM

The DOM is abstracted using a virtual DOM. Instead of directly manipulating the actual DOM, the createElement function is used to create virtual DOM nodes, which are lightweight JavaScript objects that represent real DOM elements. The render function then transforms these virtual nodes into actual DOM elements, abstracting the complexity of direct DOM manipulation. This approach allows for efficient updates by only modifying the parts of the DOM that have changed.

## Routing system

The routing system manages changes in the URL's hash fragment, which is the part after the # symbol. You provide the system with an object that maps hash values to specific functions. When the hash changes, the corresponding function is called, allowing the page to update based on the new route. To enable navigation, set the `href` of clickable elements to a value like `#/myHash`, and the framework will trigger the associated function when the hash changes. For the default route (`#/`), you can use an empty string as the key. Additionally, event handlers can access the current hash, enabling dynamic updates to the page's appearance and behavior based on the URL, which facilitates creating a single-page application.

## State management

Provide the framework with the initial state of your app, which it wraps in a proxy object. This proxy triggers updates automatically whenever the state changes. The framework compares the current virtual DOM with its previous version using a diffing algorithm and renders any new or changed content.

Here's how it works: when any property of your state object changes, the framework automatically updates the actual DOM. A diff function compares the updated virtual DOM with the previous one and returns a patch function, which applies the necessary changes to the real DOM. If your app is named `app`, the `updateVapp` function passes the root DOM node to the patch function, which then updates the DOM, rendering new elements and placing them in the correct position.

## Event handling

This custom event handling system centralizes the registration and execution of event handlers for various event types (e.g., `keydown`, `click`, `dblclick`). It allows developers to associate specific functions with events using a simple registration process. When an event occurs, global listeners capture it, pass it to a handler, and trigger the relevant registered functions. The system uses a diff approach to ensure the actual DOM is updated efficiently based on the state changes, making it highly responsive and suitable for building interactive applications.

##  Special thanks to:
Rodrigo Pombo  
[Build Your Own React](https://pomb.us/build-your-own-react/)  
YCM Jason  
[Building a Simple Virtual DOM from Scratch](https://dev.to/ycmjason/building-a-simple-virtual-dom-from-scratch-3d05)


