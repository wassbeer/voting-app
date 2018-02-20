// get an instance of the router for api routes
const router = express.Router(),
    request('request'),
    bcrypt = require('bcrypt'),
    jwt = require('jsonwebtoken');

// Create JWT upon succesful login
router.post('/login', function(req, res) {
// 1. request.get credentials from localhost:3000/api/users/read
// 2. When credentials are responded
// 2.1 If no credentials, res.status(200).json authentication failed: no user found
// 2.2 If credentials, compare the password to bcrypt hash
// 2.2.1 If the password is false, res.status(200).json authentication failed: no password found
// 2.2.2 If the password is correct
// 2.2.2.1 Create JWT token
// 2.2.2.2 Respond with the token

// verify a JSON web token
router.post('/verify', (res, res) => {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (token) {
        jwt.verify(token, global.config.jwt_secret, function(err, decoded) {
            err ? return res.json({ "error": true }): //failed verification. 
            (req.decoded = decoded;
            next()); //no error, proceed
        });
    } else {
        return res.status(403).send({         // forbidden without token
            "error": true
        });
    }
})

/*        if (!res.body) {
            res.status(200).json({
                status: 'failed',
                data: 'Authentication failed. User not found.'
            });
        }
        bcrypt.compare(req.body.password, res.body.password, function(err, res) {
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
                default
                // if user is found and password is right
                // create a token with only our given payload
                // we don't want to pass in the entire user since that has the password
                const payload = {
                    admin: body.name
                };
                var token = jwt.sign(payload, router.get('superSecret'), {
                    expiresInMinutes: 1440 // expires in 24 hours
                });
                // return the information including token as JSON
                res.json({
                    success: true,
                    message: 'Enjoy your token!',
                    token: token
                });;
                .catch((err) => {
                    res.status(500).json({
                        status: 'error',
                        data: err
                    });
                });
            }

        })
    });
}); */