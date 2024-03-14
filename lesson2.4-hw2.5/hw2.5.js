let titleProject = prompt('Oценка проекта')
console.log('title Project', titleProject)

const screensValue = prompt('Шаблонные, с уникальным дизайном, с анимациями')
console.log('screensValue', screensValue)

const screenPrice = 21;
console.log('screen price', screenPrice)

const percentage = 40
console.log('percentage', percentage)

let fullPrice = 0
console.log('full price', fullPrice)

let responsive = prompt('Нужен респонсивный сайт?') == 'yes' ? true : false
// if (responsive == 'yes') {responsive = true} 
// else {responsive = false}
console.log('responsive', responsive)

let service1 = prompt('Какой сервис нужен?')
console.log('service1', service1)

let servicePrice1 = prompt('Сколько это будет стоить? сервис нужен?')
console.log('servicePrice1', servicePrice1)

let service2 = prompt('Какой еще сервис тебе нужен сервис нужен?')
console.log('service2', service2)

let servicePrice2 = prompt('Сколько будет стоить этот второй сервис?')
console.log('servicePrice2', servicePrice2)


// Homework 2.5

// 1. Создай / Объяви функцию getAllServicePrices с помощью метода "function expression".
// Функция должна возвращать стоимость всех дополнительных услуг.
// Результат функции запиши в переменную allServicePrices.

function getAllServicePrices() {
    return parseInt(servicePrice1) + parseInt(servicePrice2);
}
let allServicePrices = getAllServicePrices();
console.log('Стоимость всех дополнительных услуг:', allServicePrices);

// 2. Создай функцию getFullPrice с помощью метода "function declaration".
// Функция должна возвращать стоимость всех дополнительных услуг(allServicePrices) и стоимость вёрстки(screenPrice )


function getFullPrice() {
    return screenPrice + getAllServicePrices();
}

let fullPricenew = fullPrice = getFullPrice();
console.log('fullPrice', fullPrice);


// 3. Создай функцию getTitle.
// Функция изменяет название проекта(titleProject), переводит первый символ в верхний регистр(делает заглавной), 
// а остальные в нижний регистр(делает маленькими) и возвращает отредактированное название проекта (titleProject). 

function getTitle() {
    return titleProject.charAt(0).toUpperCase() + titleProject.slice(1).toLowerCase()
}

titleProject = getTitle()
console.log('titleProject', titleProject)

// 4. Создай функцию getServicePercentPrices.
// Функция возвращает итоговую стоимость за вычетом процента подрядчику.

function getServicePercentPrices(price) {
    return Math.round(price - (price * percentage / 100));
}

let servicePercentPrice1 = getServicePercentPrices(fullPrice);
console.log('servicePercentPrice1', servicePercentPrice1)


// 5. Создай функцию getRollbackMessage.
// Функция считает и выводит в консоль значение скидки для клиента в зависимости от стоимости проекта.

// Программа должна:
// - считать стоимость всего проекта
// - считать стоимость всех услуг
// - считать стоимость проекта с учётом скидки подрядчику
// - считать скидку клиента, в зависимости от стоимости проекта и выводить сообщение в консоль


function getRollbackMessage(price) {
    if (price > 50000) {
        return 'Сделаем скидку 10%';
    } else if (price > 20000 && price <= 50000) {
        return 'Сделаем скидку 5%';
    } else if (price > 0 && price <= 20000) {
        return 'Скидка не предусмотрена';
    } else {
        return 'Что-то пошло не так';
    }
}

console.log(getRollbackMessage(fullPrice));
