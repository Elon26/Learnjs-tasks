"use strict"

const ul = document.createElement("ul");
document.body.append(ul);
let userText = "";

do {
    userText = prompt("Введите текст");
    if (userText) {
        const li = document.createElement("li");
        li.textContent = userText;
        ul.append(li);
    }
} while (userText);