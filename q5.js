
var fs = require("fs");
var zlib = require('zlib');

// Compress the file input.txt to input.txt.gz
fs.createReadStream('./file/text1.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('./file/text1.txt.gz'));

console.log("File Compressed.");