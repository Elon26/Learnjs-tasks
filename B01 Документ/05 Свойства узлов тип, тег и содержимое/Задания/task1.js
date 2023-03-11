"use strict"

const elems = document.querySelectorAll("li");

elems.forEach(elem => {
    let animalName = elem.firstChild.textContent.trim();
    console.log(animalName); // Выводим текст без поддерева

    const subElems = elem.querySelectorAll("li");
    console.log(`${animalName}: ${subElems.length} дочерних li`); // Выводим количество дочерних li
});

