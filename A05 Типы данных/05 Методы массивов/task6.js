"use strict"

function Calculator() {
    this.methods = {
        "-": (num1, num2) => num1 - num2,
        "+": (num1, num2) => +num1 + +num2
    }

    this.calculate = function (expression) {
        const [num1, operator, num2] = expression.split(" ");

        if (!this.methods[operator] || isNaN(+num1) || isNaN(+num2)) return NaN;

        return this.methods[operator](num1, num2);
    }

    this.addMethod = function (method, callback) {
        this.methods[method] = callback;
    }
}

const calc = new Calculator;

console.log(calc.calculate("3 + 7")); // 10
console.log(calc.calculate("7 - 3")); // 4

calc.addMethod("*", (num1, num2) => num1 * num2);
calc.addMethod("/", (num1, num2) => num1 / num2);
calc.addMethod("**", (num1, num2) => num1 ** num2);

console.log(calc.calculate("3 * 7")); // 21
console.log(calc.calculate("6 / 3")); // 2
console.log(calc.calculate("2 ** 3")); // 8