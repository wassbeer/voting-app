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

function loginUser(email, password){
	// mongoose query authentication api
	// mongoose read db
}

function registerUser(obj){
	let user = new User(obj)
	user.save((err) => {
		err ? console.error(err):
		console.log('User saved succesfully')
	})
}

function updateUser(email, updateObj){
	let conditions = { email: `${email}` }, 
	update = { $inc: `${updateObj}`}
User.update(conditions, update, (err) => {
	err ? console.error(err) :
	console.log('User data updated succesfully')
});
}

function deleteUser(email){
	User.remove({email: `${email}`}, (err) => {
		err ? console.error(err):
		console.log('User data deleted')
	})
}

module.exports = {
  registerUser
};
