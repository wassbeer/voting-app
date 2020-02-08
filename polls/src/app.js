// dependencies
const express = require('express'),
	appConfig = require('./config/main-config.js'),
	routeConfig = require('./config/route-config.js'),
	mongoDb = require('./db/connection.js').init,

	// express instance
	app = express();

// mongodb connection && collection
mongoDb();

// config
appConfig.init(app);
routeConfig.init(app);

module.exports = app;