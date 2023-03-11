"use strict"

const names = ["iliakan", "remy", "elon26", "elodsfsdfn26"];

let users = [];

async function getUsers(names) {
    const responses = await Promise.all(names.map(name => fetch("https://api.github.com/users/" + name)))
    const results = await Promise.all(responses.map(response => response.json()));
    users = results.filter(user => user.login);
}

getUsers(names);

setTimeout(() => {
    console.log(users);
}, 1000);

