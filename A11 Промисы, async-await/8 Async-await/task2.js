"use strict"

class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

async function loadJson(url) {
    const response = await fetch(url);

    if (response.status == 200) {
        return response.json();
    } else {
        throw new HttpError(response);
    }
}

async function demoGithubUser() {
    let name = prompt("Введите логин?", "elon26");

    try {
        const response = await loadJson(`https://api.github.com/users/${name}`);
        console.log(`Полное имя: ${response.name}`);
        return response;
    } catch (err) {
        if (err instanceof HttpError && err.response.status == 404) {
            console.log("Такого пользователя не существует, пожалуйста, повторите ввод.");
            return demoGithubUser();
        } else {
            throw err;
        }
    }
}

demoGithubUser();