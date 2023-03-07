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
    const arr = [];

    while (subList) {
        arr.push(subList.value);
        subList = subList.next;
    }

    arr.reverse().forEach(el => console.log(el));
}

printListCycle(mylist);

const arr = [];
const printListRec = (list) => {
    arr.push(list.value);

    if (list.next) {
        printListRec(list.next)
    } else {
        arr.reverse().forEach(el => console.log(el));
    };
}

printListRec(mylist);
