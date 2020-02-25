"use strict";

let input = +prompt ('Введите число', '');
let total = 0; 
let message;

while (input > 0) {
    input = +prompt ('Введите число', '');
    total += input;
}

if (input === null) {
    message = 'Общая сумма чисел равна' + total;
    alert(message);
} 

console.log(total);