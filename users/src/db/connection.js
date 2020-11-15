const environment = process.env.NODE_ENV || 'test',
	envDatabase = require('../../mongodbfile')[environment]
let _db = null;

module.exports.getDb = function() { return _db; }
module.exports.init = async function() {
    return await require('mongodb').connect(process.env.DATABASE_URL, (err, database) => {    
        if (err) {
			return console.log(err);
		}
		
		_db = database.db(envDatabase);
		console.log('mongodb connected to ' + process.env.DATABASE_URL + envDatabase);
		return _db;
    });
};