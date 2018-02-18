const getDb = require('./connection').getDb,
    ObjectId = require('mongodb').ObjectId;

/*

|  URI Endpoint     | HTTP Method | CRUD Method |          Result |
| ----------------- | :---------: | ----------: | --------------: |
| /users/create     |    POST     |      CREATE | create a user |
| /users/ping       |     GET     |        READ |            pong |
| /users/user/:id   |     GET     |        READ |   get user info |
| /users/update/:id |     PUT     |      UPDATE |     edit a user |
| /users/delete/:id |   DELETE    |      DELETE |   delete a user |

*/


module.exports = {
    createUser: async function(obj) {
        return getDb().collection('users').insertOne(obj);
    },

    readUser: async function(userId) {
        let o_id = new ObjectId(userId),
            cursor = getDb().collection('users').find({ _id: o_id });
        return await cursor.next() // returns document result of collection.find() method
    },

    updateUser: async function(userId, updateObj) {
        let o_id = new ObjectId(userId),
            conditions = { _id: o_id },
            update = { $set: updateObj };
        return await getDb().collection('users').updateOne(conditions, update);
    },

    deleteUser: async function(userId) {
        let o_id = new ObjectId(userId);
        return await getDb().collection('users').deleteOne({ _id: o_id });
    }
};