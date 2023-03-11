"use strict"

elem.append(document.createTextNode(text))
elem.innerHTML = text
elem.textContent = text

// Все 3 метода дадут одинаковый результат, если text содержит только текст и не обернут в теги. Если обернут, то второй метод преобразует обертку в HTML-тег, а первый и третий методы вставят обертку "как есть", в виде текста.