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
        let db = getDb();
        db.collection('users').insert(obj, (err) => {
            err ? console.error(err) :
                console.log('user inserted');
        });
    },

    readUser: function(data) {
        db.collection('users').find({ id: req.params.id }, (err, user) => {
            // err ? console.error(err) :
            return user;
        });
    },

    updateUser: function(userId, updateObj) {
        let conditions = { id: `${userId}` },
            update = { $set: `${updateObj}` }
        db.collection('users').update(conditions, update, (err, result) => {
            err ? console.error(err) :
                console.log('User data updated succesfully')
            console.log(result)
        });
    },

    deleteUser: function(userId) {
        db.collection('users').delete({ id: `${userId}` }, (err) => {
            err ? console.error(err) :
                console.log('user deleted')
        })
    }

};