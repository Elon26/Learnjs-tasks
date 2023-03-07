"use strict"

const room = {
    number: 23
};

const meetup = {
    title: "Совещание",
    occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
    place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

console.log(JSON.stringify(meetup, function replacer(key, value) {
    return ((key === "occupiedBy" && value === meetup) || key === "self") ? undefined : value;
}));
