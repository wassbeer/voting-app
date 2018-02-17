// dependencies
const express = require('express'),
    appConfig = require('./config/main-config.js'),
    routeConfig = require('./config/route-config.js'),
    mongodb = require('./db/connection.js'),

    // express instance
    app = express();

// mongodb connection
mongodb.init();

// config
appConfig.init(app, express);
routeConfig.init(app);

module.exports = app;