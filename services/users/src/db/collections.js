const connection = require('./connection.js'),
    database = require('../../mongodbfile.js')[process.env.NODE_ENV];
    
module.exports = {
    users: function createUsersCollection(client) {
        let db = client.db(database)
        db.createCollection("users", (err) => {
            err ? console.error(err) :
                console.log('users collection created')
        });
    }};