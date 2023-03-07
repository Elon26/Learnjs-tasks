"use strict"

const camelize = (str) => {
    const arr = str.split("");
    const resultArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== "-") {
            resultArr.push(arr[i]);
        } else {
            if (arr[i + 1] === "-") continue;
            resultArr.push(arr[i + 1].toUpperCase());
            i++;
        }
    }

    return resultArr.join("");
}

console.log(camelize("background-color")); // == 'backgroundColor';
console.log(camelize("background----color")); // == 'backgroundColor';
console.log(camelize("list-style-image")); // == 'listStyleImage';
console.log(camelize("-webkit-transition")); // == 'WebkitTransition';
console.log(camelize("--webkit-transition")); // == 'WebkitTransition';
console.log(camelize("------webkit-------transition")); // == 'WebkitTransition';