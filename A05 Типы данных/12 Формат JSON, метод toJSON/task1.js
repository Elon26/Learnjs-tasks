"use strict"

const user = {
    name: "Василий Иванович",
    age: 35
};

console.log(user);

const JSONUser = JSON.stringify(user);

console.log(JSONUser);

const parseUser = JSON.parse(JSONUser);

console.log(parseUser);
