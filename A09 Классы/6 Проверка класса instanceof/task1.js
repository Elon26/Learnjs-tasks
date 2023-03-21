"use strict"

function A() { }
function B() { }

A.prototype = B.prototype = {};

let a = new A();

alert(a instanceof B); // true, т.к. сравнение идёт по прототипам классов, которые, по результатам выполенния строки 6, у обоих классов равны.