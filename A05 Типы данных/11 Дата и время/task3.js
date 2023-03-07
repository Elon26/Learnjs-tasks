"use strict"

const date1 = new Date(2012, 0, 3);
const date2 = new Date(2023, 1, 19);

const getLocalDay = (date) => {
    const americanDayNumber = date.getDay();

    if (americanDayNumber === 0) return 7;
    return americanDayNumber;
};

console.log(getLocalDay(date1));
console.log(getLocalDay(date2));