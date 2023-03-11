"use strict"

mouse.tabIndex = 0;
mouse.style.position = "relative";
const mouseCoords = mouse.getBoundingClientRect();
let currentTop = mouseCoords.top;
let currentLeft = mouseCoords.left;

function keyWatch(e) {
    switch (e.key) {
        case "ArrowUp":
            currentTop = currentTop + mouse.offsetHeight;
            mouse.style.bottom = currentTop + "px";
            break;
        case "ArrowRight":
            currentLeft = currentLeft + mouse.offsetWidth;
            mouse.style.left = currentLeft + "px";
            break;
        case "ArrowDown":
            currentTop = currentTop - mouse.offsetHeight;
            mouse.style.bottom = currentTop + "px";
            break;
        case "ArrowLeft":
            currentLeft = currentLeft - mouse.offsetWidth;
            mouse.style.left = currentLeft + "px";
            break;
        default:
            break;
    }
}

mouse.addEventListener("focus", () => {
    mouse.addEventListener("keydown", keyWatch)
})

mouse.addEventListener("blur", () => {
    mouse.removeEventListener("keydown", keyWatch)
})
