"use strict"

const vasya = { name: "Вася", age: 25 };
const petya = { name: "Петя", age: 30 };
const masha = { name: "Маша", age: 28 };

const arr = [vasya, petya, masha];

const sortByAge = (arr) => {
    arr.sort((a, b) => a.age - b.age)
}

sortByAge(arr);

console.log(arr[0].name); // Вася
console.log(arr[1].name); // Маша
console.log(arr[2].name); // Петя
console.log(arr)