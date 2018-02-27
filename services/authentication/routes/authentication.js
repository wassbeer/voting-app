// get an instance of the router for api routes
const express = require('express'),
    router = express.Router(),
    request = require('request'),
    bcrypt = require('bcrypt'),
    jwt = require('jsonwebtoken');

module.exports = router;

router.post('/login', (req, res) => {
    request.post('localhost:3000/api/users/read', {
        email: req.body.email
    }).then((user) => {
        bcrypt.compare(req.body.password, user.password, (err, res) => {
            if (res) {
                return rightPassword = true;
            }
        }).then((rightPassword) => {
            switch (rightPassword) {
                case !rightPassword:
                    res.status(200).json({
                        status: 'failed',
                        data: 'Authentication failed. Wrong password.'
                    });
                    break;
                default:
                    const payload = {
                            admin: body.name
                        },
                        token = jwt.sign(payload, router.get('superSecret'), {
                            expiresInMinutes: 1440 // expires in 24 hours
                        });
                    // return the information including token as JSON
                    res.json({
                            success: true,
                            message: 'Enjoy your token!',
                            token: token
                        })
                        .catch((err) => {
                            res.status(500).json({
                                status: 'error',
                                data: err
                            });
                        });
            }
        });
    });
});

router.post('/verify', (req, res, next) => {
    // check header or url parameters or post parameters for token
    var token = req.body.token || req.param('token') || req.headers['x-access-token'];
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, app.get('superSecret'), function (err, decoded) {
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