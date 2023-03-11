"use strict"

document.onclick = function (e) {
    coords.innerHTML = e.clientX + ':' + e.clientY;
};

const elemCoords = field.getBoundingClientRect();

console.log(`Координаты первой точки ${elemCoords.left}:${elemCoords.top}`);
console.log(`Координаты второй точки ${elemCoords.right}:${elemCoords.bottom}`);
console.log(`Координаты третьей точки ${elemCoords.left + field.clientLeft}:${elemCoords.top + field.clientTop}`);
console.log(`Координаты четвёртой точки ${elemCoords.right - (field.offsetWidth - field.clientWidth - field.clientLeft)}:${elemCoords.bottom - (field.offsetHeight - field.clientHeight - field.clientTop)}`);