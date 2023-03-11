"use strict"

field.onclick = function (event) {
    const fieldCoords = this.getBoundingClientRect();

    const ballTopCoord = event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2;
    const ballLeftCoord = event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2;

    if (ballTopCoord < 0) ballTopCoord = 0;
    if (ballLeftCoord < 0) ballLeftCoord = 0;

    if (ballLeftCoord + ball.clientWidth > field.clientWidth) {
        ballLeftCoord = field.clientWidth - ball.clientWidth;
    }

    if (ballTopCoord + ball.clientHeight > field.clientHeight) {
        ballTopCoord = field.clientHeight - ball.clientHeight;
    }

    ball.style.left = ballLeftCoord + 'px';
    ball.style.top = ballTopCoord + 'px';
}
