var fs = require('fs');

if (! process.argv[2]){
    console.log("Please specify a path to a file as a command-line argument");
    process.exit(1);
}

var s = fs.createReadStream(process.argv[2]);
s.setEncoding('utf8');
var count = 0;


s.on('data', function(chunk){
  console.log(`Got a chunk of data wth ${chunk.toString().length} chars`);
  count += chunk.split('\n').length - 1;
});

s.on('end', function(){
  console.log(`Done reading data from a file with ${count} rows`);
});

s.on('error', function(error){
  console.log('Something went wrong', error);
});


console.log('OK, let it roll ...');
