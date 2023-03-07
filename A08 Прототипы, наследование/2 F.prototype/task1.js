"use strict"


function Rabbit() { }
Rabbit.prototype = {
    eats: true
};

const rabbit = new Rabbit();

// Rabbit.prototype = {};

// console.log(rabbit.eats); // true, т.к. присвоение prototype нового значения будет влиять только на вновьсозданные инстансы

// Rabbit.prototype.eats = false;

// console.log(rabbit.eats); // false, т.к. идет изменение свойства существующего прототипа

// delete rabbit.eats;

// console.log(rabbit.eats); // true, т.к. у объекта rabbit нет свойства eats

delete Rabbit.prototype.eats;

console.log(rabbit.eats); // undefined, т.к. теперь свойства eats нет ни у объекта rabbit, ни у его прототипа.
