const channel = getChannel(computedAppVersion);
var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;
const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};
const channelName = getChannelName(channel);