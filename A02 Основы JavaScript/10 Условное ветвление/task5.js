"use strict"

let message1;
const login = 'Директор';

if (login == 'Сотрудник') {
    message1 = 'Привет';
} else if (login == 'Директор') {
    message1 = 'Здравствуйте';
} else if (login == '') {
    message1 = 'Нет логина';
} else {
    message1 = '';
}


const message2 =
    login === 'Сотрудник'
        ? 'Привет'
        : login === 'Директор'
            ? 'Здравствуйте'
            : login == ''
                ? 'Нет логина'
                : '';

console.log(message2);