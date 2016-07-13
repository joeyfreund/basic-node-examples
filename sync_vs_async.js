var fs = require('fs');

// Define a few functions ...


// Sync version
function readLargeFile(filename){
  console.log(`Start reading ${filename}`);
  fs.readFileSync(filename);
  console.log(`Done reading ${filename}`);
}

// Async version
function readLargeFile2(filename){
  console.log(`Start reading ${filename}`);
  fs.readFile(filename, function(err, data){
    console.log(`Done reading ${filename}`);
  });
}


// Sync version
function repeat(word, n){
  for (var i = 0; i < n; i++) {
    console.log(word);
  }
}

// Async version
function repeat2(word, n){
  for (var i = 0; i < n; i++) {
    setImmediate(() => console.log(word));
  }
}


// Let's try to use these functions ...



if (! process.argv[2]){
    console.log("Please specify a path to a file as a command-line argument");
    process.exit(1);
}

// Try switching between the different versions (sync and async), run the program and 
// observe the output on the console.
repeat2('Wow', 20);
readLargeFile2(process.argv[2]);

