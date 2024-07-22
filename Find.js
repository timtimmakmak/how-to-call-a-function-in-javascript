const isTabInView = () => !document.hidden;
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);