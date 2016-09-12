var mqtt    = require('mqtt');
var pub  = mqtt.connect('mqtt://test.mosquitto.org');
var sub  = mqtt.connect('mqtt://test.mosquitto.org');

sub.on('connect', function () {
  sub.subscribe('presence');
});

pub.on('connect', function () {
  pub.publish('presence', 'Hello mqtt');
});

sub.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString());
  sub.end();
});
