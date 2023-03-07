"use strict"

it("Возводит x в степень n", function () {
    let x = 5;

    let result = x;
    assert.equal(pow(x, 1), result);

    result *= x;
    assert.equal(pow(x, 2), result);

    result *= x;
    assert.equal(pow(x, 3), result);
});

// Во всех трёх тестах использована одна и та же функция result, что затрудняет поиск ошибок, при их возникновении.

// Исправленный вариант:
describe("Возводит x в степень n", function () {
    it("5 в первой степени равно 5", function () {
        assert.equal(pow(5, 1), 5);
    });

    it("5 во второй степени равно 25", function () {
        assert.equal(pow(5, 2), 25);
    });

    it("5 в третьей степени равно 125", function () {
        assert.equal(pow(5, 3), 125);
    });
});