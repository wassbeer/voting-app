const express = require('express'),
    router = express.Router(),
    mongoose = require('../db/queries');

// ## URI endpoints

// | Endpoint          | HTTP Method | CRUD Method |          Result |
// | ----------------- | :---------: | ----------: | --------------: |
// | /users/login      |    POST     |      CREATE | login as a user |
// | /users/register   |    POST     |      CREATE | register a user |
// | /users/ping       |     GET     |        READ |            pong |
// | /users/user/:id   |     GET     |        READ |   get user info |
// | /users/update/:id |     PUT     |      UPDATE |     edit a user |
// | /users/delete/:id |   DELETE    |      DELETE |   delete a user |

router.get('/ping', (req, res, next) => {
  res.send('pong')
})

router.post('/login', (req, res, next) =>{
  mongoose.verify(
    req.body.email,
    req.body.password
    ).then(() => {
      // res.redirect to /users/user/:id 
    });
});

router.post('/register', (req, res, next) => {
    let user = ({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    mongoose.registerUser(user)
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


// router.get('/', (req, res, next) => {
//     mongoose.findAllUsers
//         .then((users) => {
//             res.status(200).json({
//                 status: 'success',
//                 data: users
//             });
//         })
//         .catch((err) => {
//             res.status(500).json({
//                 status: 'error',
//                 data: err
//             });
//         });
// });

module.exports = router;