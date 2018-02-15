(function() {

    'use strict';

    // dependencies
    const express = require('express'),
        appConfig = require('./config/main-config.js'),
        routeConfig = require('./config/route-config.js'),

        // express instance
        app = express();

    // *** config *** //
    appConfig.init(app, express);
    routeConfig.init(app);

    module.exports = app;

}());