const EventEmitter = require('events')

const customEmitter = new EventEmitter();

customEmitter.on('response',  (data) => {
    console.log(`data received ${data}`);
})

customEmitter.on('response',  (data) => {
    console.log(`data ${data}`);
})

customEmitter.emit('response', 'asdinaivs') 

