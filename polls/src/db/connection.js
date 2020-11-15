const environment = process.env.NODE_ENV || 'test',
    envDatabase = require('../../mongodbfile')[environment];
let _db = null;

exports.getDb = function() { return _db; }
exports.init = async function() {
	return await require('mongodb').connect(process.env.DATABASE_URL, (err, database) => {
		if (err) {
			return console.log(err);
		}
		
		_db = database.db(envDatabase);
		console.log('mongodb connected to ' + process.env.DATABASE_URL + envDatabase);
		return _db;
	});
};
