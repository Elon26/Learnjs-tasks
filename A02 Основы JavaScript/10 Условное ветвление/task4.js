"use strict"

let result1, result2;
const a = 2;
const b = 3;

if (a + b < 4) {
    result1 = 'Мало';
} else {
    result1 = 'Много';
}

alert(result1);

result2 = (a + b < 4) ? "Мало" : "Много";

alert(result2);
