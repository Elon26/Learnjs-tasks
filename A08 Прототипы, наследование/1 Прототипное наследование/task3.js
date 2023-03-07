"use strict"

const animal1 = {
    eat() {
        this.full = true;
    }
};

const rabbit1 = {
    __proto__: animal1
};

rabbit1.eat();

// свойство full при вызове rabbit.eat() получит объект rabbit, т.к. именно в его контексте (он указан перед точкой) происходит вызов функции
