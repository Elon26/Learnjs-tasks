"use strict"

function* pseudoRandom(seed) {
    let previous = seed;
    let next = 0;

    while (true) {
        next = previous * 16807 % 2147483647;
        yield next;
        previous = next;
    }
}

let generator = pseudoRandom(1);

console.log(generator.next().value); // 16807
console.log(generator.next().value); // 282475249
console.log(generator.next().value); // 1622650073