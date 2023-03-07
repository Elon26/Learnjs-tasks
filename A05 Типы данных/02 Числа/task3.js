"use strict"

const readNumber = () => {
    let userValue;

    do {
        userValue = prompt("Введите число")
    } while (!isFinite(userValue))

    if (!userValue) return null;
    return userValue;
}

console.log(readNumber());