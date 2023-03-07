"use strict"

const userAnswer = prompt("Какое «официальное» название JavaScript?");

if (userAnswer.trim() === "ECMAScript") {
    alert("Верно");
} else {
    alert("Не верно. Правильный ответ - ECMAScript");
}