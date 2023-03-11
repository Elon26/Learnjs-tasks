"use strict"

const fieldWidth = field.clientWidth;
const fieldHeight = field.clientHeight;

const ballWidth = ball.clientWidth;
const ballHeight = ball.clientHeight;

ball.style.top = `${fieldHeight / 2 - ballHeight / 2}px`;
ball.style.left = `${fieldWidth / 2 - ballWidth / 2}px`;
