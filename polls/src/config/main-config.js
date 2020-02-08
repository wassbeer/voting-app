(function(appConfig) {

	'use strict';

	// main dependencies
	const morgan = require('morgan'),
		bodyParser = require('body-parser');


	appConfig.init = function(app) {
		// app middleware 
		if (process.env.NODE_ENV !== 'test') {
			app.use(morgan('dev'));
		}
		app.use(bodyParser.json());
		app.use(bodyParser.urlencoded({ extended: false }));
	};

})(module.exports);