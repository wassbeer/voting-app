// get an instance of the router for api routes
const express = require('express'),
    router = express.Router(),
    request = require('request'),
    bcrypt = require('bcrypt'),
    jwt = require('jsonwebtoken');

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
                token = jwt.sign(payload, 'superSecret', {
                    expiresIn: 1440 // expires in 24 hours
                });
            res.json({
                success: true,
                message: 'Enjoy your token!',
                token: token
            })
        });
    });
});

router.post('/login', (req, res) => {
    let options = {
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
                            token = jwt.sign(payload, 'superSecret', {
                                expiresIn: 1440 // expires in 24 hours
                            });
                        // return the information including token as JSON
                        res.json({
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

// verify route for pages on client side with authenticated access
router.use((req, res, next) => {
    
    // check header or url parameters or post parameters for token
    var token = req.body.token || req.headers['x-access-token'];
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, 'superSecret', function (err, decoded) {
            if (err) {
                return res.json({
                    success: false,
                    message: 'Failed to authenticate token.'
                });
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next();
            }
        });
    } else {
        // if there is no token
        // return an error
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });
    }
});

router.get('/', (req,res) => {
    res.json({ message: 'Welcome to the coolest API on earth!' });
})

module.exports = router;
