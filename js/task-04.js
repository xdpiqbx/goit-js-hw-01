//console.group(" -=-=-=-=- Задание 4 -=-=-=-=- ")
/*
На счету пользователя есть 23580 кредитов, значение хранится в переменной credits (создай и присвой).
Пользователь решает купить ремонтных дроидов, которые стоят по 3000 кредитов за штуку.
Цена одного дроида хранится в переменной pricePerDroid (создай и присвой).

При посещении страницы, используя prompt, необходимо спросить количество дроидов
которые пользователь хочет купить и сохранить в переменную.

Напиши скрипт который:
Если в prompt была нажата кнопка Cancel, выводит в консоль сообщение 'Отменено пользователем!'.
В противном случае, рассчитывает общую цену заказа и сохраняет в переменной totalPrice.
Проверяет сможет ли пользователь оплатить заказ:
если сумма к оплате превышает количество кредитов на счету,
выводи в консоль сообщение 'Недостаточно средств на счету!'.
в противном случае необходимо посчитать остаток кредитов на счету
и вывести сообщение 'Вы купили [число] дроидов, на счету осталось [число] кредитов.'.
*/

// let credits = 23500
// let pricePerDroid = 3000
// let droids = ""

// console.log("Для запуска скрипта раскомментируйте стоки 26 (prompt) и 44 (alert)")

// //droids = prompt("Сколько ремонтных дроидов Вы хотите купить?")

// droids *= 1

// let message = ""
// let totalPrice = 0

// if (!droids){
//     message = 'Отменено пользователем или Вы ввели неверные данные!'
// }else{
//     totalPrice = pricePerDroid * droids
//     if(credits < totalPrice){
//         message = 'Недостаточно средств на счету!'
//     }else{
//         credits -= totalPrice
//         message = `Вы купили ${droids} дроидов, на счету осталось ${credits} кредитов.`
//     }
// }
// //alert(message)
// console.groupEnd()


// const orderPieces = 0;

// const credits = 23580;
// const pricePerDroid = 3000;
// const CANCELED_BY_USER = 'Отменено пользователем!';
// const ACCESS_DENIED = 'Недостаточно средств на счету!';

// let totalPrice = orderPieces * pricePerDroid; // Write code on this line
// let balanceCredit = credits - totalPrice; // Write code on this line
// let message;

// // Write code under this line
  
// if(orderPieces === null){
//   message = CANCELED_BY_USER;
// }else{
//   if(balanceCredit > 0){
//     message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
//   }else{
//     message = ACCESS_DENIED;
//   } 
// }

// console.log(message);