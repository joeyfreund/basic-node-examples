'use strict';


var z = 0;

// When using var, a variable is created in the global or lexical (i.e. function) scope

for (var i = 1; i < 10; i++) {
  var z = i * 3;
  setImmediate(() => { console.log('Using let, i is', i, 'z is', z); });
}

console.log('After the loop, i is', i, 'z is', z);




// When using let, a variable is declared in the block (in this case, the for loop) scope

for (let j = 1; j < 10; j++) {
  let z = j * 3;
  setImmediate(() => { console.log('Using let, j is', j, 'z is', z); });
}

try{
  console.log('After the loop, j is', j, 'z is', z);
} catch (error){
  console.log(error);
}

