const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
console.log( "A" - "B" + 2);
console.log("0 || 1 = "+(0 || 1));
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
const average = arr => arr.reduce((a, b) => a + b) / arr.length;
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;