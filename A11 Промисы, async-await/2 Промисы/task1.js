"use strict"

let promise = new Promise(function (resolve, reject) {
    resolve(1);

    setTimeout(() => resolve(2), 1000);
});

promise.then(console.log); // Вернёт 1, т.к. resolve не выполняется повторно.
