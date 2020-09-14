console.group(" -=-=-=-=- Задание 5 -=-=-=-=- ")
/*
Пользователь может оформить доставку товара к себе в страну,
указав ее при посещении страницы в prompt.
Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну.
Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

Но доставка есть не везде, если указанной страны нет в списке,
то выводи в alert сообщение 'В вашей стране доставка не доступна'.

Ниже приведен список стран и стоимость доставки.
Китай - 100 кредитов
Чили - 250 кредитов
Австралия - 170 кредитов
Индия - 80 кредитов
Ямайка - 120 кредитов
*/
/* 
console.log("Для запуска скрипта раскомментируйте стоки 23 (prompt) и 60 (alert)")
let country = ""
//country = prompt("В какую страну доставить?")
let deliveryPrice = 0;
let message = null;

country = country.toUpperCase()

switch(country){
    case "КИТАЙ":
        country = "Китай"
        deliveryPrice = 100
    break;
    case "ЧИЛИ":
        country = "Чили"
        deliveryPrice = 250
    break;
    case "АВСТРАЛИЯ":
        country = "Австралия"
        deliveryPrice = 170
    break;
    case "ИНДИЯ":
        country = "Индия"
        deliveryPrice = 80
    break;
    case "ЯМАЙКА":
        country = "Ямайка"
        deliveryPrice = 120
    break;
    default:
        country = null
}

if(!country){
    message = "В вашей стране доставка не доступна"
}else{
    message = `Доставка в ${country} будет стоить ${deliveryPrice} кредитов`
}

//alert(message)

console.groupEnd()
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Это пиздец. Нет слов! */
const countryName = null;

const CANCELED_BY_USER = 'Отменено пользователем!';
const NO_DELIVERY = 'В выбранную страну доставка недоступна.';
const CHINA = 'Китай';
const AUSTRALIA = 'Австралия';
const INDIA = 'Индия';
const JAMAICA = 'Ямайка';
let message;
let price = 0;
let country;

if (countryName === null) {
  message = CANCELED_BY_USER;
} else {
  country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase(); // Write code on this line
  switch (country) {
  // Write code under this line
    case CHINA:
        price = 100
    break;
    case AUSTRALIA:
        price = 170
    break;
    case INDIA:
        price = 80
    break;
    case JAMAICA:
        price = 120
    break;
    default:
		price = 0
  }
}
if (country && (price > 0)) { // Write code on this line
  message = `Доставка в ${country} будет стоить ${price} кредитов`;
}else if(countryName === null){
   message = CANCELED_BY_USER
}else{
  message = NO_DELIVERY;
}

 console.log(message);

//если countryName равно "КитаЙ"
// то значение message будет равно
// 'Доставка в Китай будет стоить 100 кредитов'

//если countryName равно null
// то значение message будет равно
// 'Отменено пользователем!'

//если countryName равно "Чили"
// то значение message будет равно
// 'В выбранную страну доставка недоступна.'