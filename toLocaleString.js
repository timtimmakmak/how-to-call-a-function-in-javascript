const uniqueArr = (arr) => [...new Set(arr)];
const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};