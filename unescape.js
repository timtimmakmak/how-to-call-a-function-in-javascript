const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};