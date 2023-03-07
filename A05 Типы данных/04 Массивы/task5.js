"use strict"

const getMaxSubSum = (arr) => {
    let maxSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentSum = arr[i];
        if (currentSum > maxSum) maxSum = currentSum;
        for (let j = i + 1; j < arr.length; j++) {
            currentSum += arr[j];
            if (currentSum > maxSum) maxSum = currentSum;
        }
    }

    return maxSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9])); // == 5
console.log(getMaxSubSum([2, -1, 2, 3, -9])); // == 6
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // == 11
console.log(getMaxSubSum([-2, -1, 1, 2])); // == 3
console.log(getMaxSubSum([100, -9, 2, -3, 5])); // == 100
console.log(getMaxSubSum([1, 2, 3])); // == 6
console.log(getMaxSubSum([-1, -2, -3])); // == 0
console.log(getMaxSubSum([-1, 2, 3, 100, -9, 11])); // == 107
