import createElement from "../createElement";

// creates the main section of the todo page; where the list goes
export const createMain = (toDoList) =>

  createElement("main", {
    attrs: {
      class: "main",
    },
    children: [
      createElement("div", {
        attrs: {
          class: "toggle-all-container",
        },
        // input and label are only shown when toDoList.length !== 0.
        children: toDoList.length == 0 ? [] : [
          createElement("input", {
            attrs: {
              class: "toggle-all",
              type: "checkbox",
            },

          }),
          createElement("label", {
            attrs: {
              class: "toggle-all-label",
              for: "toggle-all",
            },
          }),
        ],
      }),

      createElement("ul", {
        attrs: {
          class: "todo-list",
        },
        children:
          toDoList
        ,
      }),
    ],
  }); 