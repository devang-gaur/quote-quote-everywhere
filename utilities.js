/**
 * utility to generate random int between range
 * @min {int/Number} lower limit
 * @max (int/Number) upper limit
 * returns {int}
 */

module.exports.getRandomInt = function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * utility to generate random Hex strings
 * @len {int/Number} length of the string
 * returns {string} hexadecimal string to @len length
 */
module.exports.randomValueHex = function randomValueHex (len) {
    return require('crypto').randomBytes(Math.ceil(len/2))
        .toString('hex') // convert to hexadecimal format
        .slice(0,len);   // return required number of characters
};


module.exports.normailzeText = function normailzeText(quote, author) {
    var arr = quote.split(" ");
    //lines = arr.join(" ")
    var linesize = arr.length;

    if ((arr.length > 8) && (linesize < 12)) {
        linesize = 6;
    } else {

    }
    var count = 0;
    var lines = [];
    while(count < arr.length) {
        var line = [];
        for (var j = 0; j < linesize; j++) {

            if (arr[count]) {
                line.push(arr[count]);
            }

            count++;
        }

        lines.push(line.join(" "));
    }

    var text = "";

    lines.forEach(function(line) {
        text += line
    }, this);

    text += "\n\n" + author.toUpperCase();

    return text;
}