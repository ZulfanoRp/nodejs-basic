const {EventEmitter} = require('events');


 
const birthdayEventListener = (name) => {
    console.log(`Happy birthday ${name}!`);
  }

  const myEventEmitter = new EventEmitter;
   
  // TODO 3
  myEventEmitter.on('say-birthday', birthdayEventListener); 

  // TODO 4
  myEventEmitter.emit('say-birthday', 'Zulfano');