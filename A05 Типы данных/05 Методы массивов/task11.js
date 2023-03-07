"use strict"

const vasya = { name: "Вася", age: 11 };
const petya = { name: "Петя", age: 22 };
const masha = { name: "Маша", age: 33 };

const arr = [vasya, petya, masha];

const getAverageAge = (arr) => {
    const ageArr = arr.map(item => item.age);
    let ageSum = 0;

    ageArr.forEach(age => {
        ageSum += age;
    });

    return ageSum / ageArr.length;
}

console.log(getAverageAge(arr)); // (11 + 22 + 33) / 3 = 22