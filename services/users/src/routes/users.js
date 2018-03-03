const express = require('express'),
	router = express.Router(),
	queries = require('../db/queries'),
	bcrypt = require('bcrypt');

/* 

    # URI endpoints

    | Endpoint              | HTTP Method | CRUD Method |          Result |
    | --------------------- | :---------: | ----------: | --------------: |
    | /api/users/create     |    POST     |      CREATE | register a user |
    | /api/users/read       |    POST     |      CREATE | authenticate    |
    | /api/users/ping       |    GET      |        READ |            pong |
    | /api/users/read/:id   |    GET      |        READ |   get user info |
    | /api/users/update/:id |    PUT      |      UPDATE |     edit a user |
    | /api/users/delete/:id |    DELETE   |      DELETE |   delete a user |

*/

router.post('/create', (req, res) => {
	let user = ({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password
	});
	queries.createUser(user)
		.then((user) => {
			res.status(201).json({
				success: true,
				data: user
			});
		}).catch((err) => {
			res.status(500).json({
				success: false,
				data: err
			});
		});
});

router.get('/ping', (req, res) => {
	res.send('pong');
});

router.post('/read', (req, res) => {
	console.log(req.body.email);
	queries.readUser(null, req.body.email)
		.then((user, err) => {
				res.status(200).json({
					success: true,
					data: user
				})
		})	
		.catch((err) => {
			res.status(404).json({
				success: false,
				data: 'User not found'
			});;
});
});

router.get('/read/:id', (req, res) => {
	queries.readUser(req.params.id)
		.then((user) => {
			user ?
				res.status(200).json({
					success: true,
					data: user
				})
				:
				res.status(404).json({
					success: false,
					data: 'User not found'
				});
		})
		.catch((err) => {
			res.status(500).json({
				success: false,
				data: err
			});
		});
});

router.put('/update/:id', (req, res) => {
	let updatedUser = {
		password: req.body.password
	};
	console.log('updatedUser')
	console.log(updatedUser)
	console.log('req.params.id')
	console.log(req.params.id)
	queries.updateUser(req.params.id, updatedUser)
		.then((user) => {
			res.status(201).json({
				success: true,
				data: user
			});
		})
		.catch((err) => {
			res.status(500).json({
				success: false,
				data: err
			});
		});
});

router.delete('/delete/:id', (req, res) => {
	queries.deleteUser(req.params.id)
		.then((user) => {
			res.status(200).json({
				success: true,
				data: user
			});
		})
		.catch((err) => {
			res.status(500).json({
				success: false,
				data: err
			});
		});
});

module.exports = router;