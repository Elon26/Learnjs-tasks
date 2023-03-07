"use strict"

function makeUser() {
    return {
        name: "John",
        ref: this
    };
}

let user = makeUser();

// console.log(user.ref.name); Результатом будет ошибка, т.к. при выполнении функции теряется контекст и this будет равно undefined.