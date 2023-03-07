"use strict"

function sayHi() {
    console.log(this.name);
}

sayHi.test = 5;

let bound = sayHi.bind({
    name: "Вася"
});

console.log(bound.test); // что выведет? почему?

// Вернет undefined, т.к. у bound нет свойства test
