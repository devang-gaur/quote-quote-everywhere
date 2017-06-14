var express = require('express');
var router = express.Router();

const watermark = require('image-watermark');

const getRandomInt = require('../utilities').getRandomInt;
const randomValueHex = require('../utilities').randomValueHex;
const quotes = require('../quotes.js');
const handleError = require('../handlers.js').handleError;
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log("QUOTE PLEASE CALLED");
	var index = getRandomInt(0, quotes.length - 1);
	console.log(index);
	var quote = quotes[index][0];
	var author = quotes[index][1];

	var text = normailzeText(quote, author);
	// target image path
	var tgtimgpath = path.resolve(__dirname, '../', 'out', 'base-' + randomValueHex(12) + '.jpg');
	// base image path
	var baseimagepath = path.resolve(__dirname, '../', 'temp', 'base.jpg');

	console.log("after  image path");


	//var text = quote + '\n\n\n' + author.toUpperCase();
	var text = "yada yada yada yada" + '\n' + "yada yada yada yada" + '\n' + "yada yada yada yada" + '\n' + "yada yada yada yada" + '\n' + "yada yada yada yada" + '\n\n\n' + author.toUpperCase();
	console.log(text);

	var options = { 'text' : text,
    	'dstPath' : tgtimgpath,
		'color' : 'rgb(255, 255, 255)',//white
		'font' : 'Arial.ttf',
		'align' : 'ltr' // left to right
	}

	console.log("embedding begins");
	watermark.embedWatermarkWithCb(baseimagepath, options, function (err) {
		console.log("in callback");
		if (err) {
			console.log("error occured");
			console.log(err);
			handleError(err, res);
			return;
		}


        var options = {
            dotfiles: 'deny',
            headers: {
                'x-timestamp': Date.now(),
                'x-sent': true
            }
    	};

		res.sendFile(tgtimgpath, options, (err) => {

            if (err) {
                handleError(err, res);
				return;
            }

            try {
                // deleting the file after the image thumbnail is served to the user
                require('fs').unlink(tgtimgpath);
            } catch (ex) {
                handleError(ex.message , res);
            }
        });
	});
	console.log("after embedding");

});

module.exports = router;
