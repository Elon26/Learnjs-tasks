"use strict"

const styles = ["Джаз", "Блюз"];
console.log(styles); // Джаз, Блюз

styles.push("Рок-н-ролл");
console.log(styles); // Джаз, Блюз, Рок-н-ролл

styles[Math.round(styles.length / 2) - 1] = "Классика";
console.log(styles); // Джаз, Классика, Рок-н-ролл

console.log(styles.shift());
console.log(styles); // Классика, Рок-н-ролл

styles.unshift("Рэп", "Регги")
console.log(styles); // Рэп, Регги, Классика, Рок-н-ролл
