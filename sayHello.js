const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
const flattenedArray = arr => [].concat(...arr);