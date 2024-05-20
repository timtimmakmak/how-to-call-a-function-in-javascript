const timeFromDate = date => date.toTimeString().slice(0, 8);
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;
var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;