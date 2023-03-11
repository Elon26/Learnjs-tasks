"use strict"

const data = {
    "Рыбы": {
        "форель": {},
        "лосось": {}
    },

    "Деревья": {
        "Огромные": {
            "секвойя": {},
            "дуб": {}
        },
        "Цветковые": {
            "яблоня": {},
            "магнолия": {}
        }
    }
};

const container = document.getElementById('container');

function createTree(cont, data) {
    const ul = document.createElement("ul");

    const props = Object.entries(data);
    props.forEach(prop => {
        const key = prop[0];
        const value = prop[1];

        const li = document.createElement("li");
        li.textContent = key;
        ul.append(li);

        if (Object.values(value).length) {
            createTree(li, data[key]);
        }
    })

    cont.append(ul);
}

createTree(container, data);
