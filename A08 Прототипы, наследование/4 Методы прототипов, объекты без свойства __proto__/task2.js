"use strict"

function Rabbit(name) {
    this.name = name;
}
Rabbit.prototype.sayHi = function () {
    console.log(this.name);
};

let rabbit = new Rabbit("Rabbit");

rabbit.sayHi(); // Функционал обращается к объекту rabbit, находит в его прототипе метод sayHi, вызывает его и в контексте объекта rabbit возвращает this.name = Rabbit
Rabbit.prototype.sayHi(); // Функционал обращается к prototype конструктора Rabbit, вызывает его метод sayHi, который поверяет его контекст на наличие свойства name, не находит его и возвращает undefined
Object.getPrototypeOf(rabbit).sayHi(); // Функционал общается к объекту rabbit и вызывает его прототип. Остальное аналогично предыдущему
rabbit.__proto__.sayHi(); // Полностью аналогичен предыдущему.
