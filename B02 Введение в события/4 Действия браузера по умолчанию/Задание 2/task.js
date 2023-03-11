"use strict"

contents.addEventListener("click", (e) => {
    if (!e.target.closest("#contents")) return;

    if (e.target.closest("a")) {
        const userAnswer = confirm("Вы действительно хотите покинуть страницу?")
        if (!userAnswer) e.preventDefault();
    }
})