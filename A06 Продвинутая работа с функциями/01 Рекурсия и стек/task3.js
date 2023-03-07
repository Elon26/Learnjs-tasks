"use strict"

function fib(n) {
    let firstNum = 1;
    let secondNum = 1;
    for (let i = 3; i <= n; i++) {
        const sum = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = sum;
    }
    return secondNum;
}

console.log(fib(3)); // 2
console.log(fib(7)); // 13
console.log(fib(77)); // 5527939700884757