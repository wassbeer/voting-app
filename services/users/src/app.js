// dependencies
const express = require('express'),
    appConfig = require('./config/main-config.js'),
    routeConfig = require('./config/route-config.js'),
    dbConnection = require('./db/connection.js'),
    collections = require('./db/collections.js')

    // express instance
    app = express();

// mongodb
dbConnection.init();
collections.users();

// config
appConfig.init(app, express);
routeConfig.init(app);

module.exports = app;