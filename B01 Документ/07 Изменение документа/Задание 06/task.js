"use strict"

const topUl = document.querySelector("ul");
const liArr = topUl.querySelectorAll("li");

liArr.forEach(li => {
    const subLiArrs = li.querySelectorAll("li").length;

    if (subLiArrs) li.firstChild.data += ` [${subLiArrs}]`;
})