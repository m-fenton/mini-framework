import createElement from "../createElement";

// creates an item for the toDoList
export const createListItem = (toDoString) =>

    createElement("li", {
        children: [
            createElement("div", {
                attrs: {
                    class: "view",
                },
                children: [
                    createElement("input", {
                        attrs: {
                            class: "toggle",
                            type: "checkbox",
                        },
                    }),
                    
                    createElement("label", {
                        attrs: {
                            class: "label",
                        },
                        children: [toDoString],
                    }),
                   
                    createElement("button", {
                        attrs: {
                            class: "destroy",
                        },
                    }),
                ],
            }),
        ],
    })
