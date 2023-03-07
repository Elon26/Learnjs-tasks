"use strict"

const arr = [5, 3, 8, 1];

const filterRange = (arr, min, max) => arr.filter(item => item >= min && item <= max);

const filtered = filterRange(arr, 1, 4);

console.log(filtered); // 3,1 (совпадающие значения)
console.log(arr); // 5,3,8,1 (без изменений)
