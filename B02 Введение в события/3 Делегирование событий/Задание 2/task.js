"use strict"

const points = tree.querySelectorAll("li");
points.forEach(point => {
    const text = point.firstChild.data.trim();
    point.firstChild.data = "";

    const subPoints = point.querySelectorAll("li");

    if (subPoints.length) {
        point.insertAdjacentHTML('afterbegin', `<span style="cursor: pointer">${text}</span>`);
    } else {
        point.insertAdjacentHTML('afterbegin', `<span>${text}</span>`);
    }
})

tree.addEventListener("click", e => {
    const target = e.target;

    if (!target.closest(".tree") || target.tagName !== "SPAN") return;

    const itemsToHide = target.closest("li").querySelectorAll("li");

    itemsToHide.forEach(item => {
        item.classList.toggle("hide");
    });
})