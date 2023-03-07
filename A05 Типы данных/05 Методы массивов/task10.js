"use strict"

const arr = [1, 2, 3, 4, 5, 6];

const shuffle = arr => {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr
}

console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));