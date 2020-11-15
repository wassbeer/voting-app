// dependencies
const express = require('express');
const appConfig = require('./config/main-config.js');
const routeConfig = require('./config/route-config.js');
const mongoDb = require('./db/connection.js').init;
	
// express instance
const app = express();

// mongodb connection && collection
mongoDb();

// config
appConfig.init(app);
routeConfig.init(app);

module.exports = app;