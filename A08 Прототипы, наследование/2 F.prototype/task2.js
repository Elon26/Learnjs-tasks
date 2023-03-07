"use strict"

// Корректно:

function Obj() {
    this.chill = true
}

const obj = new Obj();

Obj.prototype.haveFun = true;

const obj2 = new obj.constructor();

console.log(obj2.chill); // true
console.log(obj2.chill); // true

// -------------------------------------------------------------

// Некорректно:

function Obj2() {
    this.chill = true
}

Obj2.prototype = {
    haveFun: true
};

const obj3 = new Obj2();

const obj4 = new obj3.constructor();

console.log(obj4.chill); // undefined
console.log(obj4.haveFun); // undefined
