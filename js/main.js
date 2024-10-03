import { showHide } from "./lessons/show-hide.js"

document.getElementById("toggleButton").addEventListener("click", () => {
    showHide("element")
})