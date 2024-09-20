import minion from "../../minion/minion";
import { Input } from "./createInput";

// Function to create the footer element
export const createHeader = () => minion.createElement("header", {
    attrs: {
        class: "header",
    },
    children: [
        minion.createElement("h1", {
            children: ["todos"]
        }),
        Input()
    ],

}
)
