var emmiter = require('./emmiter');

emmiter.on('test', function() {
   console.log('Test Events Emmiter');
});

emmiter.remove('test');

emmiter.on('test', function() {
    console.log('I\'m just going somewhere');
});

console.log('Testing was started');

emmiter.emit('test');