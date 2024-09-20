import minion from "../../minion/minion"

// creates an item for the toDoList
export const createListItem = (toDoString) =>

    minion.createElement("li", {
        children: [
            minion.createElement("div", {
                attrs: {
                    class: "view",
                },
                children: [
                    minion.createElement("input", {
                        attrs: {
                            class: "toggle",
                            type: "checkbox",
                        },
                    }),
                    
                    minion.createElement("label", {
                        attrs: {
                            class: "label",
                        },
                        children: [toDoString],
                    }),
                   
                    minion.createElement("button", {
                        attrs: {
                            class: "destroy",
                        },
                    }),
                ],
            }),
        ],
    })
