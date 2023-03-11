"use strict"

function positionAt(anchor, position, elem) {
    const anchorCoords = anchor.getBoundingClientRect();

    switch (position) {
        case "top":
            elem.style.top = anchorCoords.top - elem.offsetHeight + window.pageYOffset + "px";
            elem.style.left = anchorCoords.left + window.pageXOffset + "px";
            break;

        case "right":
            elem.style.top = anchorCoords.top + window.pageYOffset + "px";
            elem.style.left = anchorCoords.right + window.pageXOffset + "px";
            break;

        case "bottom":
            elem.style.top = anchorCoords.bottom + window.pageYOffset + "px";
            elem.style.left = anchorCoords.left + window.pageXOffset + "px";
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

