
var fs = require("fs");
var zlib = require('zlib');

fs.createReadStream('./file/text1.txt.gz')
   .pipe(zlib.createGunzip())
   .pipe(fs.createWriteStream('./file/text1.txt','utf-8'));
  
console.log("File Decompressed.");