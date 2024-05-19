const isWeekday = (date) => date.getDay() % 6 !== 0;
const arrayContains = (arr, element) => arr.includes(element);
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());