"use strict"

function makeCounter() {
    let count = 0;

    return function () {
        return count++;
    };
}

let counter = makeCounter();
let counter2 = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1

console.log(counter2()); // 0, counter и counter2 независимы
console.log(counter2()); // 1, counter и counter2 независимы
