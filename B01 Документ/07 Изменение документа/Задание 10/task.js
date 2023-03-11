"use strict"

const tableBody = document.querySelector("table tbody");
const bodyRows = tableBody.querySelectorAll("tr");

const sortedRows = [...bodyRows].sort((rowA, rowB) => {
    const nameA = rowA.cells[0].innerHTML;
    const nameB = rowB.cells[0].innerHTML;

    return nameA > nameB || nameA === "..." ? 1 : -1
});

tableBody.append(...sortedRows);