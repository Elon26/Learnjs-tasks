"use strict"

let phrase = "Hello";

if (true) {
    let user = "John";

    function sayHi() {
        console.log(`${phrase}, ${user}`);
    }
}

sayHi(); // Ошибка, т.к. sayHi не существует за пределами if