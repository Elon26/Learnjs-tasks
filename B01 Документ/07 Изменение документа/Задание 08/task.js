"use strict"

const div = document.createElement("div");

const firstSeparator = document.createElement("span");
firstSeparator.textContent = ":";
const secondSeparator = firstSeparator.cloneNode(true);

const hour = document.createElement("span");
hour.style.color = "red";
hour.textContent = "hh";
div.append(hour);
div.append(firstSeparator);

const min = document.createElement("span");
min.style.color = "green";
min.textContent = "mm";
div.append(min);
div.append(secondSeparator);

const sec = document.createElement("span");
sec.style.color = "blue";
sec.textContent = "ss";
div.append(sec);

document.body.prepend(div);

function setFormat(time) {
    if (time < 10) return "0" + time;
    return time;
}

let timer;

function clockStart() {
    const currentTime = new Date();
    let currentHour = currentTime.getHours();
    let currentMin = currentTime.getMinutes();
    let currentSec = currentTime.getSeconds();

    hour.textContent = setFormat(currentHour);
    min.textContent = setFormat(currentMin);
    sec.textContent = setFormat(currentSec);

    timer = setInterval(() => {
        if (currentSec < 59) {
            currentSec++;
        } else {
            currentSec = 0;

            if (currentMin < 59) {
                currentMin++;
            } else {
                currentMin = 0;

                if (currentHour < 23) {
                    currentHour++;
                } else {
                    currentHour = 0;
                }
            }
        }

        hour.textContent = setFormat(currentHour);
        min.textContent = setFormat(currentMin);
        sec.textContent = setFormat(currentSec);
    }, 1000);
}

function clockStop() {
    clearInterval(timer)
}