"use strict"

let calculator = {
    read(num1, num2) {
        this.a = +prompt("Введите первое число");
        this.b = +prompt("Введите второе число");
    },

    sum() {
        return `Сумма равна ${this.a + this.b}`
    },

    mul() {
        return `Произведение равно ${this.a * this.b}`
    }
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
