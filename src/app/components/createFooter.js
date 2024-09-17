import minion from "../../minion/framework";
// Function to create the footer element
export const createFooter = (count) => {
  if (count < 1) {
    return null
  }
  return minion.createElement("footer", {
    attrs: {
      class: "footer",
    },
    children: [
      minion.createElement("span", {
        attrs: {
          class: "todo-count",
        },
        children: [`${count} items left`], // Show the current count of toDoList items
      }),
      minion.createElement("ul", {
        attrs: {
          class: "filters",
        },
        children: [
          minion.createElement("li", {
            children: [
              minion.createElement("a", {
                attrs: {
                  class: "",
                  href: "#/"
                },
                children: ["All"]
              }),
              minion.createElement("a", {
                attrs: {
                  class: "",
                  href: "#/active"
                },
                children: ["Active"]
              }),
              minion.createElement("a", {
                attrs: {
                  class: "",
                  href: "#/completed"
                },
                children: ["Completed"]
              })
            ]
          })
        ],
      }),
      minion.createElement("button", {
        attrs: {
          class: "clear-completed",
          // disabled: "", // or remove this line if you want the button to be enabled
        },
        children: ["Clear completed"]
      })
    ],
  });
}

