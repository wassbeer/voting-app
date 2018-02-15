const mongoose = require('./connection'),
User = require('./models').User

// ## URI endpoints

// | Endpoint          | HTTP Method | CRUD Method |          Result |
// | ----------------- | :---------: | ----------: | --------------: |
// | /users/login      |    POST     |      CREATE | login as a user |
// | /users/register   |    POST     |      CREATE | register a user |
// | /users/ping       |     GET     |        READ |            pong |
// | /users/user/:id   |     GET     |        READ |   get user info |
// | /users/update/:id |     PUT     |      UPDATE |     edit a user |
// | /users/delete/:id |   DELETE    |      DELETE |   delete a user |

function loginUser(){

}

function registerUser(obj){
	let user = new User(obj)
	user.save((err) => {
		err ? console.error(err):
		console.log('User saved succesfully')
	})
}

module.exports = {
  registerUser
};
