const environment = process.env.NODE_ENV || 'test',
    createUsersCollection = require('./collections').users,
    database = require('../../mongodbfile')[environment];
    
module.exports = require('mongodb').connect(process.env.DATABASE_URL, (err, client) => {
            createUsersCollection(client);
            db = client.db(database)
            return db
        }