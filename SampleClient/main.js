var request = require('request');
var mqtt = require('mqtt');

var API_URL = "https://swapi.co/api/";

var pub  = mqtt.connect('mqtt://test.mosquitto.org');
var sub  = mqtt.connect('mqtt://test.mosquitto.org');

// Subscriber setup
sub.on('connect', function () {
  sub.subscribe('swapi');
  console.log("Subscribed to swapi");
});

sub.on('message', function (topic, message) {
  // message is Buffer
  console.log("Received Message on swapi");
  var apiResult = request.get(API_URL + message.toString(), function(error, response, body) {
    console.log(body);
  });
  sub.end();
});

// Publisher setup
pub.on('connect', function () {
  setInterval(() => {
    pub.publish('swapi', 'people/1');
    console.log("Published to swapi");
  }, 1000);

});
