"use strict"

alert(null || 2 && 3 || 4); // Сначала отработает оператор && и вернет 3, т.к. ни одно из значений не приводится к false. Затем отработает оператор || и вернет 3, т.к. это первое значение, которое приводится к true