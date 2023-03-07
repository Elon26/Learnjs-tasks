"use strict"

const date = new Date(2023, 1, 18);

const weekDays = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

const getWeekDay = (date) => {
    return weekDays[date.getDay()];
};

console.log(getWeekDay(date));