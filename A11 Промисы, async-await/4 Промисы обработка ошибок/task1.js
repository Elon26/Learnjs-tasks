"use strict"
new Promise(function () {
    setTimeout(() => {
        throw new Error("Whoops!");
    }, 1000);
}).catch(console.log);

// catch не выполнится, т.к. setTimeout выполняется ассинхронно, следовательно ошибка будет вызвана за пределами промиса
