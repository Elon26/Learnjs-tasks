"use strict"

const hamster = {
    eat(food) {
        this.stomach.push(food);
    }
};

const speedy = {
    stomach: [],
    __proto__: hamster
};

const lazy = {
    stomach: [],
    __proto__: hamster
};

speedy.eat("apple");

console.log(speedy.stomach);
console.log(lazy.stomach);
