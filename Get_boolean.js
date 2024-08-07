const merge = [...new Set([...a, ...b])];
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();