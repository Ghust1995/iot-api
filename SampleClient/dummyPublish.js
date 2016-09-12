var mqtt = require('mqtt');
var MQTT_URL = require("../config").mqtt.getUrl();

var pub  = mqtt.connect(MQTT_URL);

// Publisher setup
pub.on('connect', function () {
  pub.publish('test', process.argv[2]);
  console.log("Published '" + process.argv[2] + "' to test");
  process.exit();
});
