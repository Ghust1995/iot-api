var request = require('request');
var mqtt = require('mqtt');

var API_URL = "https://swapi.co/api/";

// TODO: MOVE DO COMMON PLACE (configuration file?)
var sub  = mqtt.connect('mqtt://localhost:1883');

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
});
