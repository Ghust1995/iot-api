var request = require("request");
var mqtt = require("mqtt");
var _ = require("lodash");

var config = require("../config");

var MQTT_URL = config.mqtt.getUrl();
var API_URL = config.api.getUrl();

var sub  = mqtt.connect(MQTT_URL);

// Subscriber setup
sub.on("connect", function () {
  console.log("Subscribing");
  _.forEach(config.mqtt.channels, (c) => {
    sub.subscribe(c);
    console.log("> " + c);
  });
});

sub.on("message", function (topic, message) {
  console.log("Received Message on " + topic);
  console.log("Getting message from " + API_URL + message.toString());
  var apiResult = request.get(API_URL + message.toString(), function(error, response, body) {
    console.log(body);
  });
});
