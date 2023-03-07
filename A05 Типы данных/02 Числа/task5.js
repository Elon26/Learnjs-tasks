"use strict"

function random(min, max) {
    return min + Math.random() * (max - min);
}

console.log(random(1, 5));
console.log(random(10, 50));
console.log(random(100, 500));