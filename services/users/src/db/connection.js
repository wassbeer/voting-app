const environment = process.env.NODE_ENV || 'test',
    createUsersCollection = require('./collections').users,
    envDatabase = require('../../mongodbfile')[environment];

let _db = null;
module.exports.getDb = function() { return _db; }
module.exports.init = function() {
    require('mongodb').connect(process.env.DATABASE_URL, (err, database) => {
        _db = database.db(envDatabase);
        if (!err) {
            console.log('mongodb connected');
        }	
    });
};


// MongoClient.connect(db.url,(err,database) =>{ 
//   const myAwesomeDB = database.db('myDatabaseNameAsAString')
//   myAwesomeDB.collection('theCollectionIwantToAccess')
// }