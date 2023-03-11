"use strict"

// Таблицу с id="age-table".
const table = document.getElementById('age-table');

// Все элементы label внутри этой таблицы (их три).
table.querySelectorAll('label');

// Первый td в этой таблице (со словом «Age»).
table.querySelector('td')

// Форму form с именем name="search".
const form = document.getElementsByName("search")[0]

// Первый input в этой форме.
form.querySelector('input')

// Последний input в этой форме.
const inputs = form.querySelectorAll('input');
inputs[inputs.length - 1]
