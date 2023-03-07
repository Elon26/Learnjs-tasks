"use strict"

const messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
];

const readMessages = new WeakSet();

readMessages.add(messages[0]);
console.log("Read message 0: " + readMessages.has(messages[0])); // true
readMessages.delete(messages[0])
console.log("Read message 0: " + readMessages.has(messages[0])); // false

// Если необходимо оставить массив messages без изменений, то можно сделать отдельную колекцию readMessages, с помощью WeakSet, которая будет хранить коллекцию прочитанных сообщений.
// В функцию, которая будет отвечать за то, чтобы отмечать, что сообщение прочитано, (например, в момент запроса элемента из базы данных или при скролле на определенный пиксель сверху документа) необходимо добавить метод readMessages.add(messages[i]), где i прочитанного элемента массива
// На этапе отрисовки необходимо добавить метод readMessages.has(messages[0]), который будет возвращать булевое значение, был ли элемент прочитан, и впоследствии задавать разные классы (и, как следствие - стили), в зависимости от статуса прочтения.
// На этапе удаления сообщения, нужно добавить метод readMessages.delete(messages[i]), где i прочитанного элемента массива.