"use strict"

let savedValue = "";
let tableCell;
const table = document.getElementById("bagua-table");
const textarea = document.createElement("textarea");
const okButton = document.createElement("button");
const canselButton = document.createElement("button");
okButton.textContent = "OK";
canselButton.textContent = "CANSEL";

function createTextarea(e) {
    const side = e.target.closest("td");

    if (!side) return;

    tableCell = side;
    savedValue = side.innerHTML;
    textarea.value = savedValue;
    side.replaceWith(textarea);
    tableCell.classList = side.classList;

    const textareaCoords = textarea.getBoundingClientRect();
    textarea.after(okButton);
    okButton.style.top = textareaCoords.bottom + 6 + "px";
    okButton.style.left = textareaCoords.left + "px";
    okButton.style.display = "block";
    textarea.after(canselButton);
    canselButton.style.top = textareaCoords.bottom + 6 + "px";
    canselButton.style.left = textareaCoords.left + okButton.offsetWidth + "px";
    canselButton.style.display = "block";

    table.removeEventListener("click", createTextarea);
    okButton.addEventListener("click", confirmChange);
    canselButton.addEventListener("click", canselChange);
}

function confirmChange(e) {
    okButton.style.display = "none";
    canselButton.style.display = "none";
    tableCell.innerHTML = textarea.value;
    textarea.replaceWith(tableCell);

    table.addEventListener("click", createTextarea)
    okButton.removeEventListener("click", confirmChange);
    canselButton.removeEventListener("click", canselChange);
}

function canselChange(e) {
    okButton.style.display = "none";
    canselButton.style.display = "none";
    tableCell.innerHTML = savedValue;
    textarea.replaceWith(tableCell);
    table.addEventListener("click", createTextarea)
    okButton.removeEventListener("click", confirmChange);
    canselButton.removeEventListener("click", canselChange);
}

table.addEventListener("click", createTextarea)