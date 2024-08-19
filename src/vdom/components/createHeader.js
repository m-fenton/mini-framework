import createElement from "../createElement";

// Function to create the footer element
export const createHeader = () => createElement("header", {
    attrs: {
        class: "header",
    },
    children: [
        createElement("h1", {
            children: ["todos"]
        }),
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
                        value: ""
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
    ],

}
)