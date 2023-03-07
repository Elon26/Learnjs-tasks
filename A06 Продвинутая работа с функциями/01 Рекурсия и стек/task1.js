"use strict"

function sumToCycle(n) {
    let result = 0;

    for (let i = 0; i <= n; i++) {
        result += i;
    }
    return result;
}

const time1 = Date.now();
console.log(sumToCycle(100)); // 5050
const time2 = Date.now();
console.log(time2 - time1);


function sumToRec(n) {
    if (n === 0) {
        return n;
    } else {
        return n + sumToRec(n - 1);
    }
}

const time3 = Date.now();
console.log(sumToRec(100)); // 5050
const time4 = Date.now();
console.log(time4 - time3);

function sumToProg(n) {
    return n * (n + 1) / 2;
}

const time5 = Date.now();
console.log(sumToProg(100)); // 5050
const time6 = Date.now();
console.log(time6 - time5);

// Самый быстрый вариант - третий, т.к. это три последовательные элементарные операции. Второй по скорости - цикл, т.к. там задействован перебор и, в результате получается n*2 мат. операций. Самый медленный - рекурсия, т.к. там задействован n мат. операций + n-1 вызовов вложенных функций.

// sumToRec(100000) возвращает ошибку "Maximum call stack size exceeded"