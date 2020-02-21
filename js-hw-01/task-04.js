const credits = 23580;
const pricePerDroid = 3000;
let message;

const amountOfDroids = prompt ('How many droids do you want to buy?');
const totalPrice = amountOfDroids * pricePerDroid;
const restOfCredits = credits - totalPrice;


if (amountOfDroids === null) {
    message = 'Отменено пользователем!'
    console.log(message)
} else {
    console.log(totalPrice)
}

if (totalPrice > credits) {
    message = 'Недостаточно средств на счету!'
    console.log(message)
} else {
    console.log('Вы купили', amountOfDroids, 'дроидов, на счету осталось', restOfCredits, 'кредитов.')
}

