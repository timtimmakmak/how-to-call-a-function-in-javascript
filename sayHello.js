console.log( "A" - "B" + "2");
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
const stringReverse = str => str.split("").reverse().join("");