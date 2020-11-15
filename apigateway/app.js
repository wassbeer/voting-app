// dependencies
const express = require('express');
const appConfig = require('./config/main-config.js');

// express instance
const app = express();

// config
appConfig.init(app);

module.exports = app;