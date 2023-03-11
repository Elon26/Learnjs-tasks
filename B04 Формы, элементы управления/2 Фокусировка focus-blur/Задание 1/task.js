"use strict"

const view = document.querySelector('.view');
const textarea = document.createElement("textarea");
textarea.className = "edit";
view.tabIndex = 0;

view.addEventListener("focus", () => {
    textarea.value = view.textContent;
    view.replaceWith(textarea);
    textarea.focus();
});

textarea.addEventListener("blur", () => {
    view.textContent = textarea.value;
    textarea.replaceWith(view);
});

textarea.addEventListener("keydown", (e) => {
    if (e.key === "Enter") textarea.blur();
});
