"use strict"

const sum = (num1) => {
    return function (num2) {
        return num1 + num2;
    }
}

console.log(sum(1)(2));
console.log(sum(5)(-1));
