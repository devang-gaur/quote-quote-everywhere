var express = require('express');
var router = express.Router();

var UTILS = require('../utilities');
var quotes = require('../quotes.js');

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log("QUOTE PLEASE CALLED");
	var index = UTILS.getRandomInt(0, quotes.length - 1);

	var quote = quotes[index][0];
	var author = quotes[index][1];

	console.log(quote);
	console.log("^ " + author);
});

module.exports = router;
