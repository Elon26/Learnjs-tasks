"use strict"

/**
    * Позиционирует элемент elem относительно элемента anchor в соответствии со значением position.
    *
    * @param {Node} anchor     элемент, около которого позиционируется другой элемент
    * @param {string} position одно из: top/right/bottom
    * @param {Node} elem       элемент, который позиционируется
    *
    * Оба элемента elem и anchor должны присутствовать в документе
    */


function positionAt(anchor, position, elem) {
    const anchorCoords = anchor.getBoundingClientRect();

    switch (position) {
        case "top":
            elem.style.top = (anchorCoords.top - elem.offsetHeight) + "px";
            elem.style.left = anchorCoords.left + "px";
            break;

        case "right":
            elem.style.top = anchorCoords.top + "px";
            elem.style.left = anchorCoords.right + "px";
            break;

        case "bottom":
            elem.style.top = anchorCoords.bottom + "px";
            elem.style.left = anchorCoords.left + "px";
            break;

        default:
            break;
    }
}


function showNote(anchor, position, html) {
    let note = document.createElement('div');
    note.className = "note";
    note.innerHTML = html;
    document.body.append(note);

    positionAt(anchor, position, note);
}

let blockquote = document.querySelector('blockquote');

showNote(blockquote, "top", "note above");
showNote(blockquote, "right", "note at the right");
showNote(blockquote, "bottom", "note below");

