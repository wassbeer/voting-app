(function() {

    'use strict';

    // dependencies
    const express = require('express'),
        bodyParser = require('body-parser'),
        appConfig = require('./config/main-config.js'),
        routeConfig = require('./config/route-config.js'),
        dbConnect = require('./db/connection.js'),

        // express instance
        app = express();

        // mongoose connection
        dbConnect;

    // *** config *** //
    appConfig.init(app, express);
    routeConfig.init(app);

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    module.exports = app;

}());