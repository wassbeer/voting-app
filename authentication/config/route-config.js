(function (routeConfig) {

	'use strict';

	routeConfig.init = (app) => {
		// routes
		const authRoutes = require('./../routes/authentication');

		// register routes
		app.use('/api/authentication/', authRoutes);
	};
})(module.exports);