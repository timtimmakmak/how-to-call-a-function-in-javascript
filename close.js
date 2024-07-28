const reversedString = str => str.split('').reverse().join('');
const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);
const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");