"use strict"

const arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

const aclean = (arr) => {
    const newArr = new Map();

    arr.forEach(item => {
        const sorted = item.toLowerCase().split("").sort().join("");
        newArr.set(sorted, item);
    });

    return Array.from(newArr.values())
};

console.log(aclean(arr)); //
