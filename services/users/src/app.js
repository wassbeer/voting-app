// dependencies
const express = require('express'),
    appConfig = require('./config/main-config.js'),
    routeConfig = require('./config/route-config.js'),
    mongoDb = require('./db/connection.js').init
    getDb = require('./db/connection.js').getDb,
    collections = require('./db/collections.js')

    // express instance
    app = express();

// mongodb connection
mongoDb()

// config
appConfig.init(app, express);
routeConfig.init(app);

module.exports = app;