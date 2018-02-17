const express = require('express'),
    router = express.Router(),
    queries = require('../db/queries'),
    mongoose = require('../db/connection')

// ## URI endpoints

// | Endpoint          | HTTP Method | CRUD Method |          Result |
// | ----------------- | :---------: | ----------: | --------------: |
// | /users/create   |    POST     |      CREATE | create a user |
// | /users/ping       |     GET     |        READ |            pong |
// | /users/user/:id   |     GET     |        READ |   get user info |
// | /users/update/:id |     PUT     |      UPDATE |     edit a user |
// | /users/delete/:id |   DELETE    |      DELETE |   delete a user |


// | Endpoint          | HTTP Method | CRUD Method |          Result |
// | ----------------- | :---------: | ----------: | --------------: |
// | /users/create   |    POST     |      CREATE | create a user |

router.post('/create', (req, res) => {
    let user = ({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    queries.createUser(user)
        .then((user) => {
            res.status(201).json({
                status: 'success',
                data: user
            });
        })
        .catch((err) => {
            res.status(500).json({
                status: 'error',
                data: err
            });
        });
});

// | Endpoint          | HTTP Method | CRUD Method |          Result |
// | ----------------- | :---------: | ----------: | --------------: |
// | /users/ping       |     GET     |        READ |            pong |

router.get('/ping', (req, res) => {
    res.send('pong')
})

// | Endpoint          | HTTP Method | CRUD Method |          Result |
// | ----------------- | :---------: | ----------: | --------------: |
// | /users/user/:id   |     GET     |        READ |   get user info |

router.get('/read/:id', (req, res) => {
    return queries.readUser(req.params.id)
        .then((user) => {
            res.status(200).json({
                status: 'success',
                data: user
            })
        })
        .catch((err) => {
            res.status(500).json({
                status: 'error',
                data: err
            });
        });
})

// | Endpoint          | HTTP Method | CRUD Method |          Result |
// | ----------------- | :---------: | ----------: | --------------: |
// | /users/update/:id |     PUT     |      UPDATE |     edit a user |

router.put('/update/:id', (req, res) => {
    return queries.updateUser(req.params.id)
        .then((user) => {
            res.status(200).json({
                status: 'success',
                data: user
            });
        })
        .catch((err) => {
            res.status(500).json({
                status: 'error',
                data: err
            });
        });
})

// | Endpoint          | HTTP Method | CRUD Method |          Result |
// | ----------------- | :---------: | ----------: | --------------: |
// | /users/delete/:id |   DELETE    |      DELETE |   delete a user |

router.delete('/delete/:id', (req, res) => {
    return queries.deleteUser(req.params.id)
        .then((user) => {
            res.status(200).json({
                status: 'success',
                data: user
            });
        })
        .catch((err) => {
            res.status(500).json({
                status: 'error',
                data: err
            });
        });
})

module.exports = router;