(function(routeConfig) {

	'use strict';	

	routeConfig.init = function(app) {
		// routes
		const pollRoutes = require('../routes/polls');

		// register routes
		app.use('/api/polls', pollRoutes);
	};
})(module.exports);
