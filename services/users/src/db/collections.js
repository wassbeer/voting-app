module.exports = {
    users: function createUsersCollection(client) {
        client.createCollection("users", (err) => {
            err ? console.error(err) :
                (console.log('users collection created'),
            client.collection('users').createIndex({ email: 1 }, { unique: true }))
        });
    }
};