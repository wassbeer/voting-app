const express = require('express'),
    router = express.Router(),
    request = require('request'),
    bcrypt = require('bcrypt'),
    jwt = require('jsonwebtoken'),
    secret = 'theOldManAndTheSea';

/* 

 URI endpoints

| Endpoint                 | HTTP Method | CRUD Method |              Result                                   |
| ------------------------ | :---------: | ----------: | ----------------------------------------------------: |
| /authentication/signup   |    POST     |   CREATE    | hash password and provide JWT upon signup             |
| /authentication/login    |     POST    |   CREATE    | bcrypt compare password and provide JWT upon login    |
| /authentication/verify   |     POST    |   CREATE    | verify a JWT for authenticated routes                 |

*/

router.post('/signup', (req, res) => {
    bcrypt.hash(req.body.password, 10, function (err, hash) {
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
                url: 'http://localhost:3000/api/users/create'
            };
        request(options, (require, response) => {
            const payload = {
                admin: response.body.data._id
            },
                token = jwt.sign(payload, secret, {
                    expiresIn: 1440 // expires in 24 hours
                });
            res.status(200).json({
                success: true,
                message: 'Enjoy your token!',
                token: token
            })
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
        url: 'http://localhost:3000/api/users/read'
    }
    request(options, (require, response) => {
        bcrypt.compare(req.body.password, response.body.data.password, (err, result) => {
            if (err) { console.error(err) } else {
                switch (result === true) {
                    case true:
                        const payload = {
                            admin: response.body.data._id
                        },
                            token = jwt.sign(payload, secret, {
                                expiresIn: 1440 // expires in 24 hours
                            });
                        res.status(200).json({
                            success: true,
                            message: 'Enjoy your token!',
                            token: token
                        })
                        break;
                    default:
                        res.status(200).json({
                            status: 'failed',
                            data: 'Authentication failed. Wrong password.'
                        });
                        break;
                }
            }
        })
    });
});

router.post('/verify', (req, res) => {
    jwt.verify(req.body.token, secret, function (err, decoded) {
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

module.exports = router;
