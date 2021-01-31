const events = require('events')
const eventEmitter = new events.EventEmitter()

const myEventHandler = () => {
  console.log('I hear scream!');
}
eventEmitter.on('scream', myEventHandler)

eventEmitter.emit('scream')
