"use strict"

function unique(arr) {
    const uniqueArr = [];

    arr.forEach(item => {
        if (!uniqueArr.includes(item)) uniqueArr.push(item)
    });

    return uniqueArr;
}

const strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

console.log(unique(strings)); // кришна, харе, :-O