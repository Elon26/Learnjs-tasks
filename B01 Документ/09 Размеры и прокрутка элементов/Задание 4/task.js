"use strict"

// В чём отличие между getComputedStyle(elem).width и elem.clientWidth?

// elem.clientWidth показывает значение в пикселях, когда getComputedStyle(elem).width вернет auto
// elem.clientWidth показывает значение без полосы прокрутки
// elem.clientWidth возвращает число, а getComputedStyle(elem).width - строку
// elem.clientWidth включает внутренние отступы, а getComputedStyle(elem).width нет