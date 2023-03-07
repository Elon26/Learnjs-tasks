"use strict"

let mylist = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

const printListCycle = (list) => {
    let subList = list;

    while (subList) {
        console.log(subList.value);
        subList = subList.next;
    }
}

printListCycle(mylist);

const printListRec = (list) => {
    console.log(list.value);

    if (list.next) printListRec(list.next);
}

printListRec(mylist);

// Решение с циклом занимаем меньше времени и ресурсов системы.