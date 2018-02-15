(function(appConfig) {

  'use strict';

  // main dependencies
  const morgan = require('morgan');

  appConfig.init = function(app, express) {
    // app middleware 
    if (process.env.NODE_ENV !== 'test') {
      app.use(morgan('dev'));
    }
  };

})(module.exports);