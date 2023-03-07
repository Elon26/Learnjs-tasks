"use strict"

const arr = ["HTML", "JavaScript", "CSS"];

const copySorted = (arr) => {
    const newArr = [...arr];
    newArr.sort();
    return newArr;
}

const sorted = copySorted(arr);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS (без изменений)
