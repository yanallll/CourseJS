
let screenPrice;
let percentage = 10
let allServicePrices;
let newTitle = '';
let titleProjects;
let screensValue;
let responsive;
let service;
let serviceSecond;
let fullPrice;



const checkIsNumber = function(x) {
   return !isNaN(parseFloat(x)) && isFinite(x)
}

const asking = function() {
   titleProjects = prompt('Название проекта')
   screensValue = prompt('шаблонные, с уникальным дизайном. с анимацией')
   responsive = prompt('Респонсив на сайте?')


   screenPrice = prompt('Сколько будет стоить?', 12000)

   while (!checkIsNumber(screenPrice) || screenPrice.trim() === '' || screenPrice === null) {
         screenPrice = prompt('Сколько это будет стоить?', 12000)
      } 
      screenPrice = Number(screenPrice)
}

const getAllServicePrices = function() {
   let sum = 0
   for (let i = 0; i < 2; i++){
      if (i === 0){
         service = prompt('какой дополнительный тип услуг нужен?', 'Услуга1')

      } else if (i === 1) {
         serviceSecond = prompt('Какойдополнительный тип услуг нужен?','Услуга2')
      } 
      let textFromPrompt = '';

      while (!checkIsNumber(textFromPrompt) || textFromPrompt.trim() === '' || textFromPrompt === null) {
         textFromPrompt = prompt('Сколько это будет стоить?')
      }
      sum = sum + Number(textFromPrompt)

   }
   return sum
}


function getFullPrice() {
   return screenPrice + allServicePrices
}

const getAllServicePercentPrices = function() {
   return fullPrice - (fullPrice * (percentage/100))
}

const getTitle = function () {
   return titleProjects.trim()[0].toUpperCase() + titleProjects.trim().slice(1).toLowerCase()
}

const getPercentageMessage = function(price) {

   if(price > 50000){
      console.log('Сделаем скидку 10%');
   }
    else if (price > 20000 && fullPrice < 40000) {
      console.log('Сделаем скидку 5%');
   } 
   else if (price < 20000 && fullPrice > 0) {
      console.log('Скидка не предусмотрена');
   } 
   else if (price < 0) {
      console.log('что-то пошло не так');
   } 
   else if ( price === 0 || fullPrice === 20000 || fullPrice === 50000) {
      console.log('проверка на строгое равенство')
   }
}

asking()
allServicePrices = getAllServicePrices()
fullPrice = getFullPrice();
servicePercentPrice = getAllServicePrices();
newTitle = getTitle();


console.log(newTitle);
console.log(allServicePrices);
console.log(fullPrice);
console.log(Math.ceil(servicePercentPrice));

getPercentageMessage(fullPrice);



