var request = require("request");
var mqtt = require("mqtt");
var _ = require("lodash");

var config = require("../config");

var MQTT_URL = config.mqtt.getUrl();
var API_URL = config.api.getUrl();

var sub  = mqtt.connect(MQTT_URL);

var channels = {
  "sensor": function(message) {
    console.log("Not yet implemented");
  },
  "sensors": function(message) {
    console.log("Not yet implemented");
  },
  "test": function(message) {
    console.log("Getting message from swapi.co/api/" + message.toString());
    var apiResult = request.get("http://swapi.co/api/" + message.toString(), function(error, response, body) {
      console.log(body);
    });
  }
};

// Subscriber setup
sub.on("connect", function () {
  console.log("Subscribing");
  _.forEach(_.keys(channels), (c) => {
    sub.subscribe(c);
    console.log("> " + c);
  });
});

sub.on("message", function (topic, message) {
  console.log("Received Message on " + topic);
  channels[topic](message);
});
