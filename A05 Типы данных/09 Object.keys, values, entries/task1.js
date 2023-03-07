"use strict"

const salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

const sumSalaries = (salaries) => {
    const salariesValues = Object.values(salaries);
    let sum = 0;

    for (const salary of salariesValues) {
        sum += salary;
    }

    return sum;
};

console.log(sumSalaries(salaries)); // 650