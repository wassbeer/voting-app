// dependencies
const express = require('express'),
	appConfig = require('./config/main-config.js'),

	// express instance
	app = express();

// config
appConfig.init(app);

module.exports = app;