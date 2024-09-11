import createElement from "../createElement";

// creates input container for editing
export const Input = (defaultValue = "") =>
  
    createElement("div", {
        attrs: {
            class: "input-container"
        },
        children: [
            createElement("input", {
                attrs: {
                    id: "todo-input",
                    class: "new-todo",
                    type: "text",
                    placeholder: "What needs to be done?",
                    value: defaultValue,
                }
            }),
            createElement("label", {
                attrs: {
                    class: "visually-hidden",
                    for: "todo-input"
                },
                // children: ["New Todo Input"]
            })
        ]
    })