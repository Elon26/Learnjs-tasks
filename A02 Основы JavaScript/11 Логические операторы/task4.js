"use strict"

alert(alert(1) && alert(2)); // выведет 1, затем undefined, т.к. alert(1) - это первое значение, которое можно привести к "false", т.к. оно возвращает undefined, и именно оно будет выведено во внешний alert