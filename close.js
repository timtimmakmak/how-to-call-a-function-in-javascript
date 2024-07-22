function myAPITS(someString: string, someNum: number) { ... };
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
const reversedString = str => str.split('').reverse().join('');