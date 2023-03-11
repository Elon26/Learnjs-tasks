"use strict"

const leftButton = document.querySelector(".left-arrow");
const rightButton = document.querySelector(".right-arrow");
const container = document.querySelector(".inner-cont");

const slidesToMove = 3;
const slidesToShow = 3;
const slidesQuantity = container.querySelectorAll("li").length;

rightButton.addEventListener("click", () => {
    const left = parseFloat(getComputedStyle(container).left);
    const destination = (left - 130 * slidesToMove) < -(130 * (slidesQuantity - slidesToShow)) ? -(130 * (slidesQuantity - slidesToShow)) : left - 130 * slidesToMove;
    container.style.left = destination + "px"
})

leftButton.addEventListener("click", () => {
    const left = parseFloat(getComputedStyle(container).left);
    const destination = (left + 130 * slidesToMove) > 0 ? 0 : left + 130 * slidesToMove;
    container.style.left = destination + "px"
})