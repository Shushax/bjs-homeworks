"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {

    if (isNaN(percent)) {
        console.log(`Параметр "процентная ставка" содержит содержит неправильное значение ${percent}`);
        return;
    } else if (isNaN(contribution)) {
        console.log(`Параметр "сумма первоначального взноса" содержит содержит неправильное значение ${contribution}`);
        return;
    } else if (isNaN(amount)) {
        console.log(`Параметр "процентная ставка" содержит содержит неправильное значение ${amount}`);
        return;
    } else if (isNaN(date)) {
        console.log(`Параметр "дата окончания выплаты" содержит содержит неправильное значение ${dateMonth}`);
        return;
    } else {
        let totalAmount;
        let now = new Date();
        let yearsOfCredit = (date.getFullYear() - now.getFullYear());
        let monthOfCredit = 0;
        for (let i = 0; i < yearsOfCredit; i++) {
            monthOfCredit += 12;
        }
        let bodyOfCredit = amount - contribution;
        let p = percent / 100 / 12
        let monthlyPayment = bodyOfCredit * (p + p / (((1 + p)^monthOfCredit) - 1));
        let result = monthlyPayment * monthOfCredit;
        totalAmount = result.toFixed(2);
        console.log(totalAmount);
        return totalAmount;
    }

}

function getGreeting(name) {
    let greeting;
    if (name === '' || name === undefined || name === null) { 
        greeting = `Привет, мир! Меня зовут Аноним`;
    } else {
        greeting = `Привет, мир! Меня зовут ${name}`;
    }
    return greeting;
}