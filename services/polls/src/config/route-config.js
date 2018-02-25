(function(routeConfig) {

	'use strict';	

	routeConfig.init = function(app) {
		// routes
		const userRoutes = require('../routes/users');

		// register routes
		app.use('/api/users', userRoutes);
	};
})(module.exports);