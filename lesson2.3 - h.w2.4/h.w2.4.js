const titleProject = prompt('Oценка проекта')
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

fullPrice = screenPrice + parseInt(servicePrice1) + parseInt(servicePrice2)
console.log('fullPrice', fullPrice) 

let servicePercentPrice = fullPrice - (fullPrice * percentage / 100);
servicePercentPrice = Math.round(servicePercentPrice);
console.log('Итоговая сумма после вычета процента', servicePercentPrice);

if (fullPrice > 50000) {
    console.log('Сделаем скидку 10%');
} else if (fullPrice > 20000 && fullPrice <= 50000) {
    alert('Сделаем скидку 5%');
} else if (fullPrice > 0 && fullPrice <= 20000) {
    alert('Скидка не предусмотрена');
} else {
    alert('Что-то пошло не так');
}

// Homework 2.5

function getAllServicePrices() {
    return parseInt(servicePrice1) + parseInt(servicePrice2);
}
let allServicePrices = getAllServicePrices();
console.log('Стоимость всех дополнительных услуг:', allServicePrices);

