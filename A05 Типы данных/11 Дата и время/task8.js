"use strict"

const formatDate = (date) => {
    const msDifference = new Date() - date;
    const secDifference = Math.round(msDifference / 1000);
    const minDifference = Math.round(secDifference / 60);

    if (msDifference < 1000) return "прямо сейчас";
    if (secDifference < 60) return `${secDifference} сек. назад`;
    if (minDifference < 60) return `${minDifference} мин. назад`;

    const yearForShow = date.getFullYear() % 100;
    let monthForShow = date.getMonth() + 1;
    if (monthForShow < 10) monthForShow = "0" + monthForShow;
    let dayForShow = date.getDate();
    if (dayForShow < 10) dayForShow = "0" + dayForShow;
    const hourForShow = date.getHours();
    const minForShow = date.getMinutes();

    return `${dayForShow}.${monthForShow}.${yearForShow} ${hourForShow}:${minForShow}`
}

console.log(formatDate(new Date(new Date - 1))); // "прямо сейчас"
console.log(formatDate(new Date(new Date - 30 * 1000))); // "30 сек. назад"
console.log(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 мин. назад"
console.log(formatDate(new Date(new Date - 86400 * 1000))); // вчерашняя дата (всё в виде двух цифр, т.е. 31.12.16 10:00)