'use strict';


// When using var, a variable is created in the global or lexical (i.e. function) scope


for (var i = 1; i < 5; i++) {
  // z is defined using var (in the global scope, since there is no lexical scope)
  var z = i * 3;
  setImmediate(() => { console.log(`Using var: i is ${i}, z is ${z}`); });
}

console.log('After the first loop, i is', i, 'z is', z);




// When using let, a variable is declared in the block (in this case, the for loop) scope

for (var i = 1; i < 7; i++) {
  let z = i * 3;
  setImmediate(() => { console.log(`Using let: i is ${i}, z is ${z}`); });
}

console.log('After the second loop, i is', i, 'z is', z);

