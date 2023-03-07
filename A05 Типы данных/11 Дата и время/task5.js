"use strict"

const getLastDayOfMonth = (year, month) => {
    const searchedDay = new Date(year, month + 1, 0);

    return searchedDay.getDate();
};

console.log(getLastDayOfMonth(2012, 1)) // 29
console.log(getLastDayOfMonth(2023, 1)) // 28
console.log(getLastDayOfMonth(2023, 2)) // 31