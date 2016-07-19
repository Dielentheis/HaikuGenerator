var fs = require('fs');
var dict = fs.readFileSync('./cmudict.txt').toString();

// creates 2d array of words that are put in the inner array at the index of the number of syllables they have (minus 1 because of 0 indexing)
function makeWordArr() {
	var lines = dict.split('\n');
	lines = fixLines(lines);
	console.log(lines);
	var wordObjArr = [[], [], [], [], [], [], []];

	for (var i = 0; i < lines.length; i++) {
		// each lineSplit should look like [word string, pronunciation string]
		var lineSplit = lines[i].split('  ');
		// finds how many syllables the word has by calling findNumberSyllables on pronunciation string
		var numSyllables = findNumberSyllables(lineSplit[1]);
		// pushes word into the array with index indicating how many syllables it has (minus one because of 0 indexing)
		if ((numSyllables <= 7) && (numSyllables > 0)) {
			wordObjArr[numSyllables-1].push(lineSplit[0]);
		}
	}
	return wordObjArr;
}

// removes any words that have non-alpha characters
function fixLines(lines) {
	var goodToGo = [];
	for (var i = 0; i < lines.length; i++) {
		var lineSplit = lines[i].split('  ');
		var add = true;
		for (var k = 0; k < lineSplit[0].length; k++) {
			if (lineSplit[0][k].match(/\W/)) {
				add = false;
			}
		}
		if (add == true) {
			goodToGo.push(lines[i]);
		}
	}
	return goodToGo;
}

// finds number of syllables in pronunciation string by counting number of digits
function findNumberSyllables(str) {
	if (typeof str === 'string') {
		var numSyllables = 0;
		for (var i = 0; i < str.length; i++) {
			if (str[i].match(/\d/)) {
				numSyllables++;
			}
		}
		return numSyllables;
	}
	return -1;
}


function createHaiku(structure) {
    console.log("this should log a haiku with the structure " + structure);
    var wordArr = makeWordArr();


}

// puts createHaiku in the exports object
// could also be done by module.exports.createHaiku = createHaiku
module.exports = {
  createHaiku: createHaiku,
};

