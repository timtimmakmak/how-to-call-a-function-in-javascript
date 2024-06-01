const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);