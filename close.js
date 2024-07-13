const resultingPromises = urls.map((url) => makHttpRequest(url));
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;