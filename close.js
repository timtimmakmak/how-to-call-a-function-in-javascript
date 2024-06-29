const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
const isTabInView = () => !document.hidden;
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;