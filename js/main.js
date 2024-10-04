import { showHide } from "./lessons/button-show-hide.js";

document.getElementById("toggle-button").addEventListener("click", () => {
  showHide("element");
});
