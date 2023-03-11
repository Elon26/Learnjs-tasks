"use strict"

function createCalendar(elem, year, month) {
    const daysQuantity = new Date(year, month, 0).getDate();
    const table = document.createElement("table");
    const header = document.createElement("tr");
    const weekDayNames = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];

    weekDayNames.forEach(day => {
        const headerItem = document.createElement("th");
        headerItem.textContent = day;
        header.append(headerItem);
    })
    table.append(header);

    const firstWeekRow = document.createElement("tr");
    const firstWeekDay = new Date(year, month - 1, 1).getDay();
    let dayCounter = 0;

    if (firstWeekDay === 0) {
        for (let i = 1; i <= 6; i++) {
            const weekItem = document.createElement("td");
            firstWeekRow.append(weekItem);
        }
        const weekItem = document.createElement("td");
        dayCounter = 1;
        weekItem.textContent = dayCounter;
        firstWeekRow.append(weekItem);
    } else {
        for (let i = 1; i < firstWeekDay; i++) {
            const weekItem = document.createElement("td");
            firstWeekRow.append(weekItem);
        }
        for (let i = firstWeekDay; i <= 7; i++) {
            const weekItem = document.createElement("td");
            dayCounter = i - firstWeekDay + 1;
            weekItem.textContent = dayCounter;
            firstWeekRow.append(weekItem);
        }
    }

    table.append(firstWeekRow);

    while (dayCounter < daysQuantity) {
        const weekRow = document.createElement("tr");

        for (let i = dayCounter + 1; i <= dayCounter + 7; i++) {
            const weekItem = document.createElement("td");
            if (i <= daysQuantity) weekItem.textContent = i;
            weekRow.append(weekItem);
        }

        table.append(weekRow);
        dayCounter += 7;
    }

    elem.append(table);
}

createCalendar(cal, 2023, 3);
