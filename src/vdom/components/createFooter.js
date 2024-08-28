import createElement from "../createElement";

// Function to create the footer element
export const createFooter = (count) => {
  if (count < 1) {
    return null
  }
  return createElement("footer", {
    attrs: {
      class: "footer",
    },
    children: [
      createElement("span", {
        attrs: {
          class: "todo-count",
        },
        children: [`${count} Items Left`], // Show the current count
      }),
      createElement("ul", {
        attrs: {
          class: "filters",
        },
        children: [
          createElement("li", {
            children: [
              createElement("a", {
                attrs: {
                  class: "",
                  href: "#/"
                },
                children: ["All"]
              }),
              createElement("a", {
                attrs: {
                  class: "",
                  href: "#/active"
                },
                children: ["Active"]
              }),
              createElement("a", {
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
      createElement("button", {
        attrs: {
          class: "clear-completed",
          disabled: "", // or remove this line if you want the button to be enabled
        },
        children: ["Clear completed"]
      })
    ],
  });
}

