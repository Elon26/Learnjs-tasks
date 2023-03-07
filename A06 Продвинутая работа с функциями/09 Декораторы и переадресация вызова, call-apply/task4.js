"use strict"

function throttle(f, ms) {
    let isWaste = false;
    let args = null;
    let context = null;

    function wrapper() {
        if (isWaste) {
            args = arguments;
            context = this;
            return;
        }

        f.apply(this, arguments);
        isWaste = true;

        setTimeout(function () {
            isWaste = false;
            if (args) {
                wrapper.apply(context, args);
                args = null;
                context = null;
            }
        }, ms);
    }

    return wrapper;
}

function f(a) {
    console.log(a)
}

let f1000 = throttle(f, 1000);

f1000(42); // Выполнен внепланом (первым).
f1000(43); // Проигнорирован.
f1000(44); // Проигнорирован, но затем выполнен, т.к. последний.
setTimeout(() => f1000(52), 2000); // Проигнорирован.
setTimeout(() => f1000(53), 2000); // Проигнорирован.
setTimeout(() => f1000(54), 2000); // Проигнорирован, но затем выполнен, т.к. последний.
setTimeout(() => f1000(62), 3000); // Проигнорирован.
setTimeout(() => f1000(63), 3000); // Проигнорирован, но затем выполнен, т.к. последний.
