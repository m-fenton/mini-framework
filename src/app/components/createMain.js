import minion from "../../minion/minion";

// creates the main section of the todo page; where the list goes
export const createMain = (toDoList) =>

  minion.createElement("main", {
    attrs: {
      class: "main",
    },
    children: [
      minion.createElement("div", {
        attrs: {
          class: "toggle-all-container",
        },
        // input and label are only shown when toDoList.length !== 0.
        children: toDoList.length == 0 ? [] : [
          minion.createElement("input", {
            attrs: {
              class: "toggle-all",
              type: "checkbox",
            },

          }),
          minion.createElement("label", {
            attrs: {
              class: "toggle-all-label",
              for: "toggle-all",
            },
          }),
        ],
      }),

      minion.createElement("ul", {
        attrs: {
          class: "todo-list",
        },
        children:
          toDoList
        ,
      }),
    ],
  }); 