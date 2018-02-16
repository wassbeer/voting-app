const environment = process.env.NODE_ENV || 'test',
    config = require('../../mongodbfile.js')[environment],
    createCollections = require('./collections');
module.exports = require('mongoose').connect(config, (err, client) => {
createCollections;
});