"use strict"

const checkSpam = (str) => {
    const strToCheck = str.toLowerCase();

    return strToCheck.includes('viagra') || strToCheck.includes('xxx');
}

console.log(checkSpam('buy ViAgRA now')) // == true
console.log(checkSpam('free xxxxx')) // == true
console.log(checkSpam("innocent rabbit")) // == false