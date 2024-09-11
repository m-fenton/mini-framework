import createElement from "../createElement";
import { Input } from "./createInput";

// Function to create the footer element
export const createHeader = () => createElement("header", {
    attrs: {
        class: "header",
    },
    children: [
        createElement("h1", {
            children: ["todos"]
        }),
        Input()
    ],

}
)
