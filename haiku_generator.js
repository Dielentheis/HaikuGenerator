// imports the exports defined in haiku.js
var haiku = require('./haiku');

// change 'false' to 'true' to select from Harry Potter instead of cmudict.txt
console.log(haiku.createHaiku([[5], [7], [5]], false));

// some alternate structures to try:
// [[2, 2, 1], [2, 3, 2], [1, 2, 2]]
// [[1, 2, 1, 1], [4, 3], [2, 1, 2]]
