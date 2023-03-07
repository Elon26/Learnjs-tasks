"use strict"

const userNumber = prompt("Введите число");

const trimedUserNumber = userNumber.trim();

if (trimedUserNumber !== "" && isFinite(trimedUserNumber)) {
    if (trimedUserNumber > 0) {
        alert(1);
    } else if (+trimedUserNumber === 0) {
        alert(0);
    } else {
        alert(-1);
    }
} else {
    alert("Введенное значение не является числом");
}