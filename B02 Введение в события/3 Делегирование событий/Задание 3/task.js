"use strict"

const tableBody = document.querySelector("table tbody");
const bodyRows = tableBody.querySelectorAll("tr");

const tableHeader = document.querySelector("table thead");

tableHeader.addEventListener("click", e => {
    const target = e.target;

    if (target.closest("th")) {
        sortRows([...bodyRows], target.dataset.type)
    }
})

function sortRows(arr, type) {
    let sortedRows = [];

    if (type === "number") {
        sortedRows = arr.sort((rowA, rowB) => {
            const nameA = rowA.cells[0].innerHTML;
            const nameB = rowB.cells[0].innerHTML;

            return nameA - nameB;
        });
    }

    if (type === "string") {
        sortedRows = arr.sort((rowA, rowB) => {
            const nameA = rowA.cells[1].innerHTML;
            const nameB = rowB.cells[1].innerHTML;

            return nameA > nameB ? 1 : -1
        });
    }

    tableBody.append(...sortedRows);
}

