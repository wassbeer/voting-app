(function(appConfig) {

  'use strict';

  // main dependencies 
const  morgan = require('morgan');

  // *** load environment variables
  require('dotenv').config();

  appConfig.init = function(app, express) {
    // app middleware
    if (process.env.NODE_ENV !== 'test') {
      app.use(morgan('dev'));
    }
  };

})(module.exports);
