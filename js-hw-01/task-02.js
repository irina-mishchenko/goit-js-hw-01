"use strict";

const total = 100;
const ordered = 50;
let message;

if (ordered > total) {
    message = 'На складе недостаточно товаров!';
    alert (message)
} else {
    message = 'Заказ оформлен, с вами свяжется менеджер.'
    alert (message)
}