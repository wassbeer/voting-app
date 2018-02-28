(function (routeConfig) {

    "use strict";

    routeConfig.init = (app) => {
        // routes
        const authRoutes = require("./../routes/authentication");

        // register routes
        app.use("/authentication/", authRoutes);
    };
})(module.exports);