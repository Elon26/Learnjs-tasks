"use strict"

const someObj = {
    name: "Евгений"
};

function A() { return someObj }
function B() { return someObj }

let a = new A();
let b = new B();

console.log(a == b); // true
