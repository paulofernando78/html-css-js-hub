export function showHide(id) {
    const element = document.getElementById(id)
        if (element.style.display === "block") {
            element.style.display = "none";
        } else {
            element.style.display = "block"
        }
}