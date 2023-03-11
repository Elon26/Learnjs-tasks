"use strict"

const moneyBefore = document.getElementById("money-before");
const moneyAfter = document.getElementById("money-after");
const heightAfter = document.getElementById("height-after");
const form = document.forms.calculator;

let initial = form.elements.money.value;
let interest = form.elements.interest.value / 100;
let years = form.elements.months.value / 12;
let result = calcNewValue();

moneyBefore.textContent = initial;
moneyAfter.textContent = result;
heightAfter.style.height = calcNewHeight();

function calcNewHeight() {
    return (result / initial) * 100 + "px"
}

function calcNewValue() {
    return Math.round(initial * (1 + interest) ** years)
}

form.addEventListener("input", e => {
    const target = e.target;

    if (target.closest('[name="money"]')) {
        initial = target.value;
        moneyBefore.textContent = initial;
    }

    if (target.closest('[name="months"]')) {
        years = target.value / 12;
    }

    if (target.closest('[name="interest"]')) {
        interest = target.value / 100;
    }

    result = calcNewValue();
    moneyAfter.textContent = result;
    heightAfter.style.height = calcNewHeight();
});
