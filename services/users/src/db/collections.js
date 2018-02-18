const getDb = require('./connection.js').getDb;

module.exports = {
    users: function createUsersCollection() {
        getDb().createCollection("users", (err) => {
            err ? console.error(err) :
                console.log('users collection created')
            getDb().collection('users').createIndex({ email: 1 }, { unique: true })
        });
    };
};