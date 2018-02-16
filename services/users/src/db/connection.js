const environment = process.env.NODE_ENV || 'test',
    config = require('../../mongoosefile.js')[environment];
module.exports = require('mongoose').connect(config, (err) => {
	err ? console.error(err) : 
	console.log('mongoose is connected')
});