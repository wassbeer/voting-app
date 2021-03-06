(function (appConfig) {

	'use strict';

	// main dependencies

	const bodyParser = require('body-parser');

	appConfig.init = function (app) {
		app.use(bodyParser.urlencoded({ extended: false }));
		app.use(bodyParser.json());
		app.use('/', require('../routes/apigateway.js'));
	};

})(module.exports);