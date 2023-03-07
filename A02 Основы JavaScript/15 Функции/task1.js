"use strict"

function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Родители разрешили?');
    }
}

function checkAge(age) {
    if (age > 18) {
        return true;
    }
    return confirm('Родители разрешили?');
}

// Обе функции работают одинаково, т.к. в случае с age > 18 функция завершается на return true, а в случае с else в обоих случая переходит к return confirm