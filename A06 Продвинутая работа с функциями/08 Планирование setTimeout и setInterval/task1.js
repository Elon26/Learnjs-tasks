"use strict"

const printNumbersWithSetInterval = (from, to) => {
    let currentNum = from;

    const counter = setInterval(() => {
        console.log(currentNum++)

        if (currentNum > to) clearInterval(counter);
    }, 1000)
}

printNumbersWithSetInterval(42, 45);


const printNumbersWithSetTimeout = (from, to) => {
    let currentNum = from;

    const counter = () => {
        console.log(currentNum++);
        if (currentNum <= to) setTimeout(counter, 1000);
    }

    setTimeout(counter, 1000);
}

printNumbersWithSetTimeout(52, 55);