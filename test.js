var quotes = require("./newquotes.js");

console.log(quotes.length);
quotes.forEach(function(quote) {
	//console.log(quote[0]);
	//console.log("^" + quote[1]);

	//console.log("\n\n\n");
}, this);

var utilities = require('./utilities.js');

var x = utilities.getRandomInt(0, quotes.length - 1);
console.log(x);
