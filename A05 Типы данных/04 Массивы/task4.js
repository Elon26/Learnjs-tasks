"use strict"

const sumInput = () => {
    const arr = [];

    while (true) {
        const userNumber = prompt("Введите число");

        if (isNaN(+userNumber) || userNumber === "" || userNumber === null) break;

        arr.push(+userNumber);
    }

    const sum = arr.reduce((acc, item) => {
        return acc + item
    }, 0);

    return `Сумма равна ${sum}`;
}

console.log(sumInput());
