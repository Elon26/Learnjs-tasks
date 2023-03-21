"use strict"

// finally позволяет задать выполнение дополнительного кода внутри функции, если данная функция принудительно завершена пользователем, при помощи return.

function test1() {
    try {
        console.log("начать работу");
        console.log("работать");
        return;
    } catch (e) {
        console.log("обработать ошибку");
    }
    console.log("очистить рабочее пространство"); // Не сработает, т.к. функция принудительно завершена в блоке try
}

test1();

function test2() {
    try {
        console.log("начать работу");
        console.log("работать");
        return;
    } catch (e) {
        console.log("обработать ошибку");
    } finally {
        console.log("очистить рабочее пространство"); // Сработает не смотря на return
    }
}

test2();
