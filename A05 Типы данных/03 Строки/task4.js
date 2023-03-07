"use strict"

const extractCurrencyValue = (str) => +str.slice(1);

console.log(extractCurrencyValue('$120'));