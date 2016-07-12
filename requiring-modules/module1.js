

// When other files require this module, they will get whatever module.exports is.
// In this case, module.exports is a function. Therefore:
// 1. You can call it
// 2. You can also use it as the constructor of an object
//

module.exports = function(){

  this.sayHi = () => {
    console.log('Hi');
  };

  this.sayBye = () => {
    console.log('Bye');
  };

  console.log("I am a module and a function");
}
