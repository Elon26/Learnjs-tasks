"use strict"

const getSecondsToTomorrow = () => {
    const currentDate = new Date();

    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();

    const msAtTomorrowStart = new Date(currentYear, currentMonth, currentDay + 1).getTime();

    return Math.round((msAtTomorrowStart - Date.now()) / 1000);
}

console.log(getSecondsToTomorrow());
