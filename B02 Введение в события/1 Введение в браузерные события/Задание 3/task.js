"use strict"

button.addEventListener("click", () => alert("1")); // Создаётся первый обработчик.

button.removeEventListener("click", () => alert("1")); // Не делается ничего, т.к. нет ссылки на функцию.

button.onclick = () => alert(2); //  Создаётся второй обработчик.

// Отработают оба обработчика.