'use strict';

let money = 50000,
    income = "фриланс",
    addExpenses = "Интернет, Телефон, Бензин",
    deposit = true,
    mission = 250000,
    period = 6;

console.log(typeof (money));
console.log(typeof (income));
console.log(typeof (deposit));
console.log(income.length);
console.log("за " + period + " месяцев " + mission + " рублей на отпуск");
console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(", "));

let budgetDay = function (a, b) {
    a = money;
    b = 30;
    return (a / b) + " " + (a % b);
};
console.log(budgetDay());


    money = +prompt("Ваш месячный доход?");

    addExpenses = prompt ("Перечислите возможные расходы за расчитываемый период через запятую!", "Интернет, телефон, бензин");
console.log(addExpenses.split(", "));

    deposit = confirm("Есть ли у вас депозит в банке?");

console.log(typeof (money));
console.log(typeof (income));
console.log(typeof (deposit));

let costs = prompt("Какие обязательные ежемесячные расходы у вас есть?");
let value = +prompt("Во сколько это обойдёться?");
let costs2 = prompt("Какие обязательные ежемесячные расходы у вас есть?");
let value2 = +prompt("Во сколько это обойдёться?");

function sum(a, b, c) {
    return c-(a + b);
}
let budgetMonth = sum(value, value2, money);
console.log(budgetMonth);

function sum2(a, b) {
    return a / b;
}
    period = sum2(mission, budgetMonth);
    console.log(Math.ceil(period));

function sum3(a, b) {
    return a / b;
};
     budgetDay = sum3(budgetMonth, 30);

console.log(Math.floor(budgetDay));

if (budgetDay >= 800){console.log("Высокий уровень дохода!")}
else if (budgetDay >= 300 && budgetDay < 800){console.log("Средний уровень дохода!")}
else if (budgetDay >= 0 && budgetDay < 300){console.log("Низкий уровень дохода!")}
else if (budgetDay < 0){console.log("Что то пошло не так!")}
