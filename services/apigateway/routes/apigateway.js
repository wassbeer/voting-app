const request = require('request'),
serviceAddress = require('../config/services-config.js')

/* All the auth validation should be handled at the API gateway level, and 
once forwarded to a (micro)service , that service can trust the request.
*/

router.post('/login', (req, res) => {
    request.post({
        url: serviceAddres.authUrl + '/auth/',
        form: { email: req.body.email, password: req.body.password },
        json: true
    }, (err, res, body) => {
        if (err) {
            return res.render('login', { error: 'An error occurred' });
        }
        if (!body.token) {
            return res.render('login', { error: 'Username or password is incorrect', username: req.body.username });
        }
        // save JWT token in the session to make it available to the angular app
        req.session.token = body.token;
        res.redirect( /* vue user route */ );
    });
});

/* 

router.post('/', function (req, res) {
    // authenticate using api to maintain clean separation between layers
    request.post({
        url: config.apiUrl + '/users/authenticate',
        form: req.body,
        json: true
    }, function (error, response, body) {
        if (error) {
            return res.render('login', { error: 'An error occurred' });
        }
 
        if (!body.token) {
            return res.render('login', { error: 'Username or password is incorrect', username: req.body.username });
        }
 
        // save JWT token in the session to make it available to the angular app
        req.session.token = body.token;
 
        // redirect to returnUrl
        var returnUrl = req.query.returnUrl && decodeURIComponent(req.query.returnUrl) || '/';
        res.redirect(returnUrl);
    });


*/