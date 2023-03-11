"use strict"

const formContainer = document.getElementById("prompt-form-container");
const form = document.getElementById("prompt-form");
const formMessage = document.getElementById("prompt-message");

function showPrompt(html) {
    formMessage.innerHTML = html;
    document.body.style.overflow = "hidden";
    formContainer.hidden = false;
    form.text.focus();
}

startButton.addEventListener("click", () => {
    showPrompt("Введите что-нибудь<br>...умное :)")
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = form.text.value;

    if (value) {
        alert(`Вы ввели ${value}`);
        document.body.style.overflow = "visible";
        formContainer.hidden = true;
        form.text.value = "";
    }
})

form.cancel.addEventListener("click", () => {
    alert(`Вы ввели null`);
    document.body.style.overflow = "visible";
    formContainer.hidden = true;
    form.text.value = "";
})
