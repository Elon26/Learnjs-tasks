"use strict"

const users = [
    { id: 'john', name: "John Smith", age: 20 },
    { id: 'ann', name: "Ann Smith", age: 24 },
    { id: 'pete', name: "Pete Peterson", age: 31 },
];

const groupById = (users) => {
    const resultObj = {};

    users.map(user => resultObj[user.id] = user);

    return resultObj;
};

const usersById = groupById(users);

console.log(usersById);
