const express = require('express'),
	router = express.Router(),
	request = require('request-promise'),
	bcrypt = require('bcryptjs'),
	jwt = require('jsonwebtoken'),
	secret = 'theOldManAndTheSea'; // TODO TWassenberg make the secret variable come from env


/* 

 URI endpoints

| Endpoint                 | HTTP Method | CRUD Method |              Result                                   |
| ------------------------ | :---------: | ----------: | ----------------------------------------------------: |
| /api/authentication/signup   |    POST     |   CREATE    | hash password and provide JWT upon signup             |
| /api/authentication/login    |     POST    |   CREATE    | bcrypt compare password and provide JWT upon login    |
| /api/authentication/verify   |     POST    |   CREATE    | verify a JWT for authenticated routes                 |
| /api/authentication/update   |     PUT     |   UPDATE    | hash a newly created password                         |

*/

router.post('/signup', (req, res) => {
	bcrypt.hash(req.body.password, 10, (err, hash) => {
		let options;
		err ? console.error(err) :
			options = {
				method: 'post',
				body: {
					name: req.body.name,
					email: req.body.email,
					password: hash
				},
				json: true,
				url: 'http://users:3000/api/users/create'
			};
		request(options).then((user) => {
			// 1. If the user is succesfully registered 
			const token = jwt.sign({ admin: user.data._id }, secret, { // payload, secret
				expiresIn: 1440 // expires in 24 hours
			});
			res.status(200).json({
				success: true,
				message: 'Enjoy your token!',
				token: token,
				user: user.data
			});
		}).catch((err) => {
			res.status(500).json({ // TODO TWASSENBERG only say "email address already in use if ..."
				success: false
			});
		});
	});
});


router.post('/login', (req, res) => {
	const options = {
		method: 'post',
		body: {
			email: req.body.email
		},
		json: true,
		url: 'http://users:3000/api/users/read'
	};
	request(options).then((user) => {
		bcrypt.compare(req.body.password, user.data.password, (err, result) => {
			switch (result) {
			case true:
				token = jwt.sign({
					admin: user._id
				}, secret, {
					expiresIn: 1440 // expires in 24 hours
				});
				res.status(200).json({
					success: true,
					message: 'Enjoy your token!',
					token: token,
					user: user.data
				});
				break;
			default:
				res.status(200).json({
					status: 'failed',
					data: 'Authentication failed. Wrong password.'
				});
			}
		});
	}).catch(() => {
		res.status(404).json({ data: 'The e-mail is not registered' });
	});
});


router.post('/verify', (req, res) => {
	jwt.verify(req.body.token, secret, (err) => {
		if (err) {
			return res.status(200).json({
				success: false,
				message: 'Failed to authenticate token.'
			});
		} else {
			return res.status(200).json({
				success: true,
				message: 'Succesfuly authenticated token.'
			});
		}
	});
});

router.put('/update/:id', (req, res) => {
	bcrypt.hash(req.body.password, 10, (err, hash) => {
		let options = {
			method: 'put',
			body: {
				password: hash
			},
			url: 'http://users:3000/api/users/update/' + req.params.id,
			json: true
		};
		request(options).then((update) => {
			res.status(201).json(update);
		})
			.catch((err) => {
				res.json(err);
			});
	});
});

module.exports = router;
