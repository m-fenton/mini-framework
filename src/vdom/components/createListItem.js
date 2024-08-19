import createElement from "../createElement";

export const createListItem = () =>

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
