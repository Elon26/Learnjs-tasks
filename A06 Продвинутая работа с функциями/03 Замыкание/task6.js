"use strict"

const users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

const byField = (key) => {
    return function (a, b) {
        if (a[key] > b[key]) {
            return 1
        } else {
            return -1;
        }
    }
}

console.log(users.sort(byField('name')));
console.log(users.sort(byField('age')));
console.log(users.sort(byField('surname')));