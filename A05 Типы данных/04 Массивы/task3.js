"use strict"

let arr = ["a", "b"];

arr.push(function () {
    console.log(this);
});

arr[2](); // Выведет весь массив arr, т.к. именно он на момент вызова является ближайшим родительским объектом