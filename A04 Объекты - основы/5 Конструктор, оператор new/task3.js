"use strict"

function Accumulator(value) {
    this.value = value;

    this.read = function () {
        const newValue = +prompt("Введите число");
        this.value += newValue;
    };
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

console(accumulator.value);