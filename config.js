var config = {};

function buildUrl(obj) {
  return obj.protocol + "://" + obj.ip + ":" + obj.port + "/";
}

config.mqtt = {
  port: 1883,
  ip: "localhost",
  protocol: "mqtt",
  getUrl: function() { return buildUrl(this); },
  channels: ["sensor", "sensors", "test"]
};

config.api = {
  port: 8080,
  ip: "localhost",
  protocol: "http",
  getUrl: function() { return buildUrl(this); },
};

config.mongo = {
  port: 27017,
  ip: "localhost",
  protocol: "mongodb",
  getUrl: function() { return buildUrl(this); },
};

module.exports = config;
