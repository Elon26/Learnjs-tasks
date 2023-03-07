"use strict"

const date = new Date(2015, 0, 2);

const getDateAgo = (date, daysAgo) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    const newDate = new Date(year, month, day - daysAgo);

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]

    return `${newDate.getDate()} ${months[newDate.getMonth()]} ${newDate.getFullYear()}`
};

console.log(getDateAgo(date, 1)); // 1, (1 Jan 2015)
console.log(getDateAgo(date, 2)); // 31, (31 Dec 2014)
console.log(getDateAgo(date, 365)); // 2, (2 Jan 2014)