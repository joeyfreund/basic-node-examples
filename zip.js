var zlib = require('zlib');
var fs = require('fs');

var r = fs.createReadStream('/tmp/a.txt');
var w = fs.createWriteStream('/tmp/a.txt.gz');

r.pipe(zlib.createGzip()).pipe(w);
