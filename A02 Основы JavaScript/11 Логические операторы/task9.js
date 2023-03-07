"use strict"

const userName = prompt("Кто там");
let userPassword;

if (!userName) {
    alert("Отменено");

} else if (userName === "Админ") {
    userPassword = prompt("Пароль");

    if (!userPassword) {
        alert("Отменено");
    } else if (userPassword === "Я главный") {
        alert("Здравствуйте");
    } else {
        alert("Неверный пароль");
    }

} else {
    alert("Я вас не знаю");
}
