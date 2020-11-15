// dependencies
const express = require('express');
const appConfig = require('./config/main-config.js');
const routeConfig = require('./config/route-config.js');

// express instance
const app = express();

// config
appConfig.init(app);
routeConfig.init(app);

module.exports = app;