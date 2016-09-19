//Index archive
var Express = require('express');
var router = Express.Router();
var crud = require('./crud');
var crudVitima = require('./crudVitima');

//Schemas
var Sensor = require('../models/sensor');
var Vitima = require('../models/vitima');


router.get('/', function(req, res) {
	res.send("Hello World. Oie.");
});

crud(router, '/sensores', Sensor);
crudVitima(router, '/vitimas', Vitima);

module.exports = router;