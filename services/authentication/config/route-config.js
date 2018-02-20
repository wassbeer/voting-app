(function(routeConfig) {

    'use strict';

    routeConfig.init = function(app) {
        // routes
        const authRoutes = require('../routes/authentication');

        // register routes
        app.use('/authentication/', authRoutes);
    };
})(module.exports);