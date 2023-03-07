"use strict"

const salaries = {
    "Egor": 7777,
    "John": 100,
    "Pete": 300,
    "Mary": 250,
    "Stepa": 777
};

const topSalary = (salaries) => {
    const couples = Object.entries(salaries);

    if (couples.length === 0) return null;

    const keys = [];
    const values = [];

    couples.forEach(el => {
        keys.push(el[0]);
        values.push(el[1]);
    });

    const maxValue = Math.max(...values);
    const maxIndex = values.findIndex(value => value === maxValue);

    return keys[maxIndex];
}

console.log(topSalary(salaries));