var EventEmmiter = require('events');
var emmiter = require('./emmiter');
var util = require('util');

util.inherits(emmiter, EventEmmiter);

var event = new emmiter();

event.addListener('test', function() {
   console.log('Test Events Emmiter');
});

event.remove('test');

event.on('test', function() {
    console.log('I\'m just going somewhere');
});

console.log('Testing was started');

event.emit('test');