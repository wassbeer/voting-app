const express = require('express'),
    router = express.Router(),
    queries = require('../db/queries'),
    mongoose = require('../db/connection')

 /* 

 URI endpoints

| Endpoint          | HTTP Method | CRUD Method |          Result |
| ----------------- | :---------: | ----------: | --------------: |
| /users/create     |    POST     |      CREATE | create a user   |
| /users/ping       |     GET     |        READ |            pong |
| /users/user/:id   |     GET     |        READ |   get user info |
| /users/update/:id |     PUT     |      UPDATE |     edit a user |
| /users/delete/:id |   DELETE    |      DELETE |   delete a user |

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
                status: 'success',
                data: user
            });
        }).catch((err) => {
            res.status(500).json({
                status: 'error',
                data: err
            });
        });
});

router.get('/ping', (req, res) => {
    res.send('pong')
})

router.get('/read/:id', (req, res) => {
    queries.readUser(req.params.id)
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

router.put('/update/:id', (req, res) => {
    let updatedUser = ({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    queries.updateUser(req.params.id, updatedUser)
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

router.delete('/delete/:id', (req, res) => {
    queries.deleteUser(req.params.id)
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