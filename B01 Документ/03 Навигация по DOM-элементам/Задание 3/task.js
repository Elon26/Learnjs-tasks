"use strict"

const table = document.body.firstElementChild;
const tableRows = table.children[0].children;

for (let i = 0; i < tableRows.length; i++) {
    const row = tableRows[i];
    const items = row.children;
    items[i].style.backgroundColor = 'red';
}
