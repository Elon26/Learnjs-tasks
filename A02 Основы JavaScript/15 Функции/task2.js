"use strict"

function checkAge2(age) {
    return age > 18
        ? true
        : confirm('Родители разрешили?')
}

console.log(checkAge2(19));

function checkAge3(age) {
    return (age > 18) || confirm('Родители разрешили?');
}

console.log(checkAge3(19));