import createElement from "../createElement";
import { createListItem } from "./createListItem";

export const createMain = () =>
  createElement("main", {
    attrs: {
      class: "main",
    },
    children: [
      createElement("div", {
        attrs: {
          class: "toggle-all-container",
        },
        children: [
          createElement("input", {
            attrs: {
              class: "toggle-all",
              type: "checkbox",
            },

          }),
          createElement("label", {
            attrs: {
              class: "toggle-all-label",
              for: "toggle-all",
            },
          }),
        ],
      }),

      createElement("ul", {
        attrs: {
          class: "todo-list",
        },
        children: [
          createListItem()
        ],
      }),
    ],
  });
