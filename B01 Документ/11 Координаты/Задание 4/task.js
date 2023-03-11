"use strict"

function positionAt(anchor, position, elem) {
    const anchorCoords = anchor.getBoundingClientRect();

    switch (position) {
        case "top-out":
            elem.style.top = anchorCoords.top - elem.offsetHeight + window.pageYOffset + "px";
            elem.style.left = anchorCoords.left + window.pageXOffset + "px";
            break;

        case "right-out":
            elem.style.top = anchorCoords.top + window.pageYOffset + "px";
            elem.style.left = anchorCoords.right + window.pageXOffset + "px";
            break;

        case "bottom-out":
            elem.style.top = anchorCoords.bottom + window.pageYOffset + "px";
            elem.style.left = anchorCoords.left + window.pageXOffset + "px";
            break;

        case "top-in":
            elem.style.top = anchorCoords.top + window.pageYOffset + "px";
            elem.style.left = anchorCoords.left + window.pageXOffset + "px";
            break;

        case "right-in":
            elem.style.top = anchorCoords.top + window.pageYOffset + "px";
            elem.style.left = anchorCoords.right - elem.offsetWidth + window.pageXOffset + "px";
            break;

        case "bottom-in":
            elem.style.top = anchorCoords.bottom - elem.offsetHeight + window.pageYOffset + "px";
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

showNote(blockquote, "top-out", "note above");
showNote(blockquote, "right-out", "note at the right");
showNote(blockquote, "bottom-out", "note below");
showNote(blockquote, "top-in", "note above inside");
showNote(blockquote, "right-in", "note at the right inside");
showNote(blockquote, "bottom-in", "note below inside");

