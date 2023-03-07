"use strict"

const userValue = +prompt("Введите число");
let resultString = `Простые числа в диапазоне от 2 до ${userValue}: `

cycle: for (let i = 2; i <= userValue; i++) {
    const limit = Math.sqrt(i);
    for (let j = 2; j < limit; j++) {
        if (i % j === 0) continue cycle;
    }
    resultString += `${i}, `;
}

alert(resultString.slice(0, resultString.length - 2));
