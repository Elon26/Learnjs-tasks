"use strict"

const ucFirst = (name) => {
    const firstLetterSmall = name[0];
    const firstLetterBig = firstLetterSmall.toUpperCase();
    return name.replace(firstLetterSmall, firstLetterBig)
}

console.log(ucFirst("олег"));
