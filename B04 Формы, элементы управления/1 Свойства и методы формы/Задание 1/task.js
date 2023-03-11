"use strict"

// Выведите значение и текст выбранного пункта.
// Добавьте пункт: <option value="classic">Классика</option>.
// Сделайте его выбранным.

console.log(genres.value);
console.log(genres[genres.selectedIndex].textContent);

genres.insertAdjacentHTML('beforeend', '<option value="classic">Классика</option>');

genres.value = "classic";