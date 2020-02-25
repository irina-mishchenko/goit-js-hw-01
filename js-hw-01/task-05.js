"use strict";

let country = prompt ('Please, choose your country');
console.log(country.toUpperCase());

let message;
let price;

switch(country) {
        case 'КИТАЙ':
        price = 100;
        break;
        
        case 'ЧИЛИ':
        price = 250;
        break;

        case 'АВСТРАЛИЯ':
        price = 170;
        break;

        case 'ИНДИЯ':
        price = 80;
        break;

        case 'ЯМАЙКА':
        price = 120;
        break;

        default:
        message = 'В вашей стране доставка недоступна'
        alert(message)
        break;
}

message = 'Доставка в ' + country + ' будет стоить ' + price + ' кредитов'
alert(message)


