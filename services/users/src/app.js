(function() {

    'use strict';

    // dependencies
    const express = require('express'),
        bodyParser = require('body-parser'),
        appConfig = require('./config/main-config.js'),
        routeConfig = require('./config/route-config.js'),

        // express instance
        app = express();

    // *** config *** //
    appConfig.init(app, express);
    routeConfig.init(app);

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    module.exports = app;

}());