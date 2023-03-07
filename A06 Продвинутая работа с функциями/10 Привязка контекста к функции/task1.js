"use strict"

function f() {
    console.log(this);
}

const user = {
    g: f.bind(null)
};

user.g();

// null