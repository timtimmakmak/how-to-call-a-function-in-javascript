const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
const randomBoolean = () => Math.random() >= 0.5;
var regexp  = new RegExp('{{([^}]+)}}', 'g');