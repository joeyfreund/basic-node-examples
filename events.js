EventEmitter = require('events');
var em = new EventEmitter();

// Here are the two basic things you can do with event emitters

// 1. Register a callback for a specific event
em.on('foo', x => {
  console.log(`I got the argument ${x}`);
});

// Emit events (with or without arguments)
em.emit('foo');
em.emit('foo', 42);
em.emit('foo', 'Hello World');

