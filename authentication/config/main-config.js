(function (appConfig) {

	const bodyParser = require('body-parser');
	const morgan = require('morgan');

	appConfig.init = (app) =>  {
		app.use(bodyParser.urlencoded({
			extended: false
		}));
		app.use(bodyParser.json());
		app.use(morgan('dev'));

		app.set('superSecret', 'psyche&brein'); // secret variable
	};


})(module.exports);