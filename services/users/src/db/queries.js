// const User = require('./models').User
const db = require('./connection.js')
// ,
// users = db.collections('users')

console.log(db)

// ## URI endpoints

// | Endpoint          | HTTP Method | CRUD Method |          Result |
// | ----------------- | :---------: | ----------: | --------------: |
// | /users/create   |    POST     |      CREATE | create a user |
// | /users/ping       |     GET     |        READ |            pong |
// | /users/user/:id   |     GET     |        READ |   get user info |
// | /users/update/:id |     PUT     |      UPDATE |     edit a user |
// | /users/delete/:id |   DELETE    |      DELETE |   delete a user |

function createUser(obj) {
    users.insert(obj, (err) => {
        err ? console.error(err):
        console.log('user inserted');
    });
}

function readUser(data) {
    users.find({id: req.params.id}, (err, user) => {
           // err ? console.error(err) :
            return user;
    });
}

function updateUser(userId, updateObj) {
    let conditions = { id: `${userId}` },
        update = { $set: `${updateObj}` }
    users.updateOne(conditions, update, (err, result) => {
        err ? console.error(err) :
            console.log('User data updated succesfully')
            console.log(result)
    });
}

function deleteUser(userId) {
    users.deleteOne({ id: `${userId}` }, (err) => {
err ? console.error(err) :
console.log('user deleted')
    })}


module.exports = {
    createUser,
    readUser,
    updateUser,
    deleteUser
};