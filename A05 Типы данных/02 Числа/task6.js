"use strict"

function random2(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}

console.log(random2(1, 5));
console.log(random2(10, 50));
console.log(random2(100, 500));