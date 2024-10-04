import { showHide } from "./lessons/button-show-hide.js";

document.getElementById("toggleButton").addEventListener("click", () => {
  showHide("element");
});
