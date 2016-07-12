'use strict';


function f(){
  x = 42;
}

function g(){
  var y = 42;
}


f();
console.log('x is', x);


g();
try{
  console.log('y is', y);
} catch (err) {
  console.log('Caught an error when trying to print y', err);
}
