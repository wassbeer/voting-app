const environment = process.env.NODE_ENV,
config = require('../../mongoosefile.js')[environment];
module.exports = require('mongoose')(config);