const environment = process.env.NODE_ENV || 'test',
    createUsersCollection = require('./collections').users;
module.exports = require('mongodb').connect(process.env.DATABASE_URL, (err, client) => {
    createUsersCollection(client);
})