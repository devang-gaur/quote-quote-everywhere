var watermark = require('image-watermark');
const imgpath = 'temp/base.jpg';

var UTILS = require('./utilities');
var quotes = require('./quotes.js');

var normailzeText = require('./utilities').normailzeText;
//var index = UTILS.getRandomInt(0, quotes.length - 1);
console.log(index);
var index = 46;
var quote = quotes[index][0];
var author = quotes[index][1];
var line = "thoda quote lamba word dichotomy";
//quote = "yyyyyyyyyyyyyyyyyyyyyyyyyyyyyy";
var text = normailzeText(quote, author);
//var text = quote + "\n\n" + author.toUpperCase();
// var text = line + "\n" + "line" + "\n" + line + "\n" + "line" + '\n\n\n' + author.toUpperCase()
//quote + "\n" + quote + "\n\n" + author
watermark.embedWatermarkWithCb(imgpath, { 'text' : text,//normailzeText(quote, author),
    'dstPath' : 'out/watermark.jpg',
	'color' : 'rgb(255, 255, 255)',
	'font' : 'Arial.ttf',
	'align' : 'ltr'
}, function(err){

	console.log("in the callback of embedWatermarkWithCb");
	if (err){
		console.log("embeding error");
	throw err;
	}

	var Jimp = require('jimp');

	Jimp.read("out/watermark.jpg", function (err, image) {
    	// do stuff with the image (if no exception)
    	if (err) {
			console.log("error aa gya");
			throw err;
		}

    	image.resize(1256, 1256)            // resize
        	 .quality(100)                 // set JPEG quality
         	.greyscale()                 // set greyscale
         	.write("out/result.jpg"); // save
	});
});


