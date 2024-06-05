const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);
const countOccurrences = (arr, element) => arr.filter(item => item === element).length;
const arrayContains = (arr, element) => arr.includes(element);