const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
const randomString = () => Math.random().toString(36).slice(2);