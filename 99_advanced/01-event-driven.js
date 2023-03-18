// 发布订阅模式
const EventEmitter = require('events');

const myEvent = new EventEmitter();

// subscriber 1
myEvent.on('event1', () => {
  console.log('event1-1 is executed');
});

// subscriber 2
myEvent.on('event1', () => {
  console.log('event1 is executed');
});

myEvent.emit('event1-2 is executed');
