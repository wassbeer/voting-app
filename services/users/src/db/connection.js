const environment = process.env.NODE_ENV || 'test',
    config = require('../../mongoosefile.js')[environment];
module.exports = require('mongoose').connect(config);