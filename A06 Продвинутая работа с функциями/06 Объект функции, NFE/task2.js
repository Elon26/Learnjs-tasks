"use strict"

const sum = num1 => {
    let interValue = num1;

    function func(num2) {
        interValue += num2;
        func.currentValue = interValue
        return func;
    }

    return func;
}

console.log(sum(1)(2).currentValue); // 3
console.log(sum(1)(2)(3).currentValue); // 6
console.log(sum(5)(-1)(2).currentValue); // 6
console.log(sum(6)(-1)(-2)(-3).currentValue); // 0
console.log(sum(0)(1)(2)(3)(4)(5).currentValue); // 15
