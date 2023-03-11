"use strict"

// Правда, что elem.lastChild.nextSibling всегда равен null? - Да

// Правда, что elem.children[0].previousSibling всегда равен null? - Нет, т.к. children[0] получает первый элемент, то перед ним может быть текстовый узел.