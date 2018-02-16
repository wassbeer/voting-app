const express = require('express'),
    router = express.Router(),
    mongoose = require('../db/queries');

    // ## URI endpoints

    // | Endpoint          | HTTP Method | CRUD Method |          Result |
    // | ----------------- | :---------: | ----------: | --------------: |
    // | /users/create   |    POST     |      CREATE | create a user |
    // | /users/ping       |     GET     |        READ |            pong |
    // | /users/user/:id   |     GET     |        READ |   get user info |
    // | /users/update/:id |     PUT     |      UPDATE |     edit a user |
    // | /users/delete/:id |   DELETE    |      DELETE |   delete a user |

/* router.post('/login', (req, res, next) => {
    mongoose.verify(
        req.body.email,
        req.body.password
    ).then(() => {
        // 1. attach JWT
        // 2. res.redirect to /users/user/:id
    }); 
}); */

// | Endpoint          | HTTP Method | CRUD Method |          Result |
// | ----------------- | :---------: | ----------: | --------------: |
// | /users/create   |    POST     |      CREATE | create a user |

router.post('/create', (req, res, next) => {
    let user = ({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    mongoose.createUser(user)
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
});

// | Endpoint          | HTTP Method | CRUD Method |          Result |
// | ----------------- | :---------: | ----------: | --------------: |
// | /users/ping       |     GET     |        READ |            pong |

router.get('/ping', (req, res, next) => {
    res.send('pong')
})

// | Endpoint          | HTTP Method | CRUD Method |          Result |
// | ----------------- | :---------: | ----------: | --------------: |
// | /users/user/:id   |     GET     |        READ |   get user info |

router.get('/read/:id', (req, res, next)=> {

})

// | Endpoint          | HTTP Method | CRUD Method |          Result |
// | ----------------- | :---------: | ----------: | --------------: |
// | /users/update/:id |     PUT     |      UPDATE |     edit a user |

router.put('/update/:id', (req, res, next)=> {

})

// | Endpoint          | HTTP Method | CRUD Method |          Result |
// | ----------------- | :---------: | ----------: | --------------: |
// | /users/delete/:id |   DELETE    |      DELETE |   delete a user |

router.delete('/delete/:id', (req, res, next) => {

})

module.exports = router;