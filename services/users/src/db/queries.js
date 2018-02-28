const getDb = require('./connection').getDb;
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
    createUser: async function (obj) {
        return getDb().collection('users').insertOne(obj).then((result) => {
            return result.ops[0]
        });
    },

    readUser: async function (userId, email) {
        let cursor;
        switch (userId === null) {
            case true: // email query
                cursor = getDb().collection('users').find({
                    email: email
                });
                return await cursor.next();
                break;
            default: // id query
                let o_id = new ObjectId(userId);
                cursor = getDb().collection('users').find({
                    _id: o_id
                });
                return await cursor.next();
                break;
        }
    },

    updateUser: async function (userId, updateObj) {
        let conditions = {
                _id: userId
            },
            update = {
                $set: updateObj
            };
        return await getDb().collection('users').updateOne(conditions, update);
    },

    deleteUser: async function (userId) {
        return await getDb().collection('users').deleteOne({
            _id: userId
        });
    }
};