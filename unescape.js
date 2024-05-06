var regexp  = new RegExp('{{([^}]+)}}', 'g');
const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const results = await Promise.all(resultingPromises);