const getDb = require('./connection').getDb
// ## URI endpoints

// | Endpoint          | HTTP Method | CRUD Method |          Result |
// | ----------------- | :---------: | ----------: | --------------: |
// | /users/create   |    POST     |      CREATE | create a user |
// | /users/ping       |     GET     |        READ |            pong |
// | /users/user/:id   |     GET     |        READ |   get user info |
// | /users/update/:id |     PUT     |      UPDATE |     edit a user |
// | /users/delete/:id |   DELETE    |      DELETE |   delete a user |

module.exports = {
    createUser: function(obj) {
        return getDb().collection('users').insertOne(obj)  
    },

    readUser: function(data) {
        return getDb().collection('users').findOne({ _id: data })
    },

    updateUser: function(userId, updateObj) {
        let conditions = { id: `${userId}` },
            update = { $set: `${updateObj}` }
        return getDb().collection('users').updateOne(conditions, update);
    },

    deleteUser: function(userId) {
        return getDb().collection('users').deleteOne({ _id: `${userId}` });
    }
};