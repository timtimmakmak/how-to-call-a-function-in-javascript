const resultingPromises = urls.map((url) => makHttpRequest(url));
const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);