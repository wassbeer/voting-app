// get an instance of the router for api routes
const router = express.Router(),
    request('request');

// route to authenticate a user (POST http://localhost:8080/api/authenticate)
router.post('/', function(req, res) {
    // find the user by making a request to the users api
    request.post({
        url: 'localhost:3000/api/users/read',
        name: req.body.email,
        json: true
    }, function(err, res, body) {
        if (err) throw err;
        if (body.status !== 'success') {
            res.json({ success: false, message: 'Authentication failed. User not found.' });
        } else if (body.password) {
            if (body.password != req.body.password) {
                res.json({ success: false, message: 'Authentication failed. Wrong password.' });
            } else {
                // if user is found and password is right
                // create a token with only our given payload
                // we don't want to pass in the entire user since that has the password
                const payload = {
                    admin: body.name
                };
                var token = jwt.sign(payload, app.get('superSecret'), {
                    expiresInMinutes: 1440 // expires in 24 hours
                });
                // return the information including token as JSON
                res.json({
                    success: true,
                    message: 'Enjoy your token!',
                    token: token
                });
            }

        }

    });
});