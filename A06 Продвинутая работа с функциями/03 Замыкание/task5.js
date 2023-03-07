"use strict"

const inBetween = (min, max) => {
    return function (item) {
        if (item >= min && item <= max) return item;
    }
}

const inArray = (arr) => {
    return function (item) {
        if (arr.includes(item)) return item;
    }
}

const arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6

console.log(arr.filter(inArray([1, 2, 10]))); // 1,2