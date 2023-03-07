"use strict"

const messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
];

const readMessages = new WeakMap();

readMessages.set(messages[0], Date.now());
console.log("Read message 0: " + readMessages.has(messages[0])); // true
console.log("Message 0 was read at " + readMessages.get(messages[0])); // true
readMessages.delete(messages[0])
console.log("Read message 0: " + readMessages.has(messages[0])); // false

// В данном случае лучше использовать WeakMap. В дополнение к методам, описанным в task1, также можно добавить метод readMessages.get, который позволит получать время прочтения сообщения, для последующего отображения.
