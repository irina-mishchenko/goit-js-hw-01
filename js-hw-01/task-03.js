"use strict";

const ADMIN_PASSWORD = prompt ('Please, enter your password');
let message;


if (ADMIN_PASSWORD ==='jqueryismyjam') {
    message = 'Добро пожаловать!'
    alert(message)
} else if (ADMIN_PASSWORD === null) {
    message = 'Отменено пользователем!'
    alert(message)
} else {
    message = 'Доступ запрещен, неверный пароль!'
    alert(message)
}

