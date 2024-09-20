import minion from "../../minion/minion"


// creates input container for editing
export const Input = (defaultValue = "") =>
  
    minion.createElement("div", {
        attrs: {
            class: "input-container"
        },
        children: [
            minion.createElement("input", {
                attrs: {
                    id: "todo-input",
                    class: "new-todo",
                    type: "text",
                    placeholder: "What needs to be done?",
                    value: defaultValue,
                }
            }),
            minion.createElement("label", {
                attrs: {
                    class: "visually-hidden",
                    for: "todo-input"
                },
                // children: ["New Todo Input"]
            })
        ]
    })