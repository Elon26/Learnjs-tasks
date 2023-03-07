"use strict"

const arr = [5, 3, 8, 9, 11, 1, 2, 1, 2];

const filterRangeInPlace = (arr, num1, num2) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < num1, arr[i] > num2) {
            arr.splice(i, 1);
            i--;
        }
    }
}

filterRangeInPlace(arr, 1, 5);

console.log(arr); // [5, 3, 1, 2, 1, 2]