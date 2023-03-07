"use strict"

const getSecondsToday = () => {
    const currentDate = new Date();

    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();

    const msAtDayStart = new Date(currentYear, currentMonth, currentDay).getTime();

    return Math.round((Date.now() - msAtDayStart) / 1000);
}

console.log(getSecondsToday());