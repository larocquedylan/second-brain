# Events Module

EventEmitter class is a core module that provides an implementation of the observer pattern. It allows you to emit events and register listeners to handle those events. The EventEmitter class is used to create custom event emitters that can be used throughout your application.

    const EventEmitter = require('events');
    class MyEmitter extends EventEmitter {}
    const myEmitter = new MyEmitter();
    myEmitter.on('message', (data) => {
    console.log(`Received message: ${data}`);
    });
    myEmitter.emit('message', 'Hello, world!');

In this example, we create a custom event emitter class MyEmitter that extends the EventEmitter class. We then create a new instance of MyEmitter and use the on() method to register a listener for the "message" event. We also use the emit() method to emit the "message" event with the string "Hello, world!" as the data argument. This triggers the listener function, which logs the received message to the console.

Another use case for the EventEmitter class is to create custom events that have specific data payloads. You can pass any number of arguments to the emit() method to pass data to the listener functions.

Here is an example of how you might create a custom event emitter with a data payload:

    const EventEmitter = require('events');
    class MyEmitter extends EventEmitter {}
    const myEmitter = new MyEmitter();
    myEmitter.on('add', (num1, num2) => {
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
    });
    myEmitter.emit('add', 2, 3);

In this example, we create a custom event emitter class MyEmitter that extends the EventEmitter class. We then create a new instance of MyEmitter and use the on() method to register a listener for the "add" event. The listener function takes two arguments, num1 and num2, which represent the operands to be added. We then use the emit() method to emit the "add" event with the numbers 2 and 3 as the data arguments. This triggers the listener function, which logs the sum of the operands to the console.

    var EventEmitter = require('events').EventEmitter

    var emitter = new EventEmitter()
    var count = 0

    emitter.on('add', onincrement)

    emitter.emit('add')
    //=> 1
    emitter.emit('add')
    //=> 2

    function onincrement() {
        console.log(++count)
        emitter.removeListener('add', onincrement)
    }

## emitter.on()

    const EventEmitter = require('events');
    const emitter = new EventEmitter();
    emitter.on('message', (data) => {
    console.log(`Received message: ${data}`);
    });
    emitter.emit('message', 'Hello, world!');

In this example, we create a new EventEmitter instance using the events core module. We then use the emitter.on() method to register a listener for the "message" event. The listener function takes one argument, data, which represents the data passed to the event.

We then use the emitter.emit() method to emit the "message" event with the string "Hello, world!" as the data argument. This triggers the listener function, which logs the received message to the console.

Another use case for emitter.on() is to register multiple listeners for the same event. You can register as many listeners as you want for a single event.

Here is an example of how you might use emitter.on() to register multiple listeners for the "message" event:

    const EventEmitter = require('events');
    const emitter = new EventEmitter();
    emitter.on('message', (data) => {
    console.log(`Received message (listener 1): ${data}`);
    });
    emitter.on('message', (data) => {
    console.log(`Received message (listener 2): ${data}`);
    });
    emitter.emit('message', 'Hello, world!');

In this example, we register two listener functions for the "message" event using emitter.on(). Both listeners take the same data argument and log the received message to the console.

When we emit the "message" event using emitter.emit(), both listener functions are triggered, and both log the received message to the console.

EventEmitter
emitter.removeListener()
emitter.once()
emitter.emit()
