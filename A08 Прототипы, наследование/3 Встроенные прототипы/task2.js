"use strict"

function f(a, b, c) {
    console.log(a + b + c);
}

Function.prototype.defer = function (ms) {
    return (...nums) => setTimeout(this, ms, ...nums);
}

f.defer(4200)(10, 30, 2); // выведет 42 через 4.2 секунды.
