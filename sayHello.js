const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
const appName = getAppName(channel);
const uniqueArray = arr => [...new Set(arr)];