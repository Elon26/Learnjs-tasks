"use strict"

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        e.target.closest(".pane").remove();
    })
});
