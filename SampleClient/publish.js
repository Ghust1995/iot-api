var mqtt = require('mqtt');

// TODO: MOVE DO COMMON PLACE (configuration file?)
var pub  = mqtt.connect('mqtt://localhost:1883');

// Publisher setup
pub.on('connect', function () {
  pub.publish('swapi', process.argv[2]);
  console.log("Published '" + process.argv[2] + "' to swapi");
  process.exit();
});
