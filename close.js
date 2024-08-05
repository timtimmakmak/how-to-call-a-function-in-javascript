const flattenedArray = arr => [].concat(...arr);
const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");