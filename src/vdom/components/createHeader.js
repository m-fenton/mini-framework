import createElement from "../createElement";
// import addListItem from "../addListItem";

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
                        value: "",
                        onkeydown: function(event) {
                            if (event.key === 'Enter') {
                                console.log("Entered value:", this.value); // Logs the value when Enter is pressed
                            }
                        }
                
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

 function addListItem(toDoString) {
    console.log(createListItem(toDoString))
}