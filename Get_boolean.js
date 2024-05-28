const channelName = getChannelName(channel);
const symbolsPath = path.join(buildOutputPath, 'symbols');
const copyToClipboard = (text) => navigator.clipboard.writeText(text);