const mongoose = require('./connection'),
    User = require('./models').User

// ## URI endpoints

// | Endpoint          | HTTP Method | CRUD Method |          Result |
// | ----------------- | :---------: | ----------: | --------------: |
// | /users/create   |    POST     |      CREATE | create a user |
// | /users/ping       |     GET     |        READ |            pong |
// | /users/user/:id   |     GET     |        READ |   get user info |
// | /users/update/:id |     PUT     |      UPDATE |     edit a user |
// | /users/delete/:id |   DELETE    |      DELETE |   delete a user |

function loginUser(email, password) {
    // mongoose query authentication api
    // mongoose read db
    // res.redirect('/users/user/:id')
}

function createUser(obj) {
    let user = new User(obj)
    // user.password --> authentication
    // user.password === res.authentication.apu
    user.save((err) => {
        err ? console.error(err) :
            console.log('User saved succesfully')
    })
}

function readUser(userId){
	// query the db for a specific user
	mongoose.read({id: userId}, (err, result) => {
		return result
	})
}

function updateUser(userId, updateObj) {
    let conditions = { id: `${userId}` },
        update = { $inc: `${updateObj}` }
    User.update(conditions, update, (err) => {
        err ? console.error(err) :
            console.log('User data updated succesfully')
    });
}

function deleteUser(userId) {
    User.remove({ id: `${userId}` }, (err) => {
        err ? console.error(err) :
            console.log('User data deleted')
    })
}

module.exports = {
    createUser,
    readUser,
    updateUser,
    deleteUser
};