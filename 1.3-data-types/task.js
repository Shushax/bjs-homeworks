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
        let monthOfCredit;
        monthOfCredit = (date.getFullYear() - new Date().getFullYear()) * 12;
        monthOfCredit -= new Date().getMonth();
        monthOfCredit += date.getMonth();
        monthOfCredit < 0 ? monthOfCredit = 0 : monthOfCredit;
        let bodyOfCredit = amount - contribution;
        let p = percent / 100 / 12
        let monthlyPayment = bodyOfCredit * (p + p / (((1 + p) ** monthOfCredit) - 1));
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