"use strict"

let name = "Ilya";

alert(`hello ${1}`); // ? выведется "hello 1", т.к. 1 в данном случае - это число

alert(`hello ${"name"}`); // ? выведется "hello name", т.к. "name" в данном случае - это строка

alert(`hello ${name}`); // ? ? выведется "hello Ilya", т.к. Ilya в данном случае - это переменная