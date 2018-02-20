const request = require('request'),
router = express.Router(),
serviceAddress = require('../config/services-config.js'),
urlConfig = require('../config/url-config')

/* All the auth validation should be handled at the API gateway level, and 
once forwarded to a (micro)service , that service can trust the request.
*/

router.post('/authentication/login', (req, res) => {
    request.post({
        url: serviceAddres.authUrl + '/authentication/login',
        form: { email: req.body.email, password: req.body.password },
        json: true
    }, (err, res, body) => {
        if (err) {
            // respond with error and redirect to login page
        }
        if (!body.token) {
            // username or password is incorrect
        }
        // grab token and sent it to the client
        // redirect the user to the profile page
    });
});

router.post('/user/register', (req, res) =>{
    // make use of urlConfig

    // 1. send request to authentication service
    // 2. send request to authorization service
    // 3. send request to the requested resource
    request. // HTTP method
}
}

router.get('/user/:id', (req, res) =>{
    // make use of urlConfig

    // 1. send request to authentication service
    // 2. send request to authorization service
    // 3. send request to the requested resource
    request. // HTTP method
}
}

router.put('/user/update', (req, res) =>{
    // make use of urlConfig

    // 1. send request to authentication service
    // 2. send request to authorization service
    // 3. send request to the requested resource
    request. // HTTP method
}
}

router.delete('/user/delete', (req, res) =>{
    // make use of urlConfig

    // 1. send request to authentication service
    // 2. send request to authorization service
    // 3. send request to the requested resource
    request. // HTTP method
}
}

router.post('/poll/share', (req, res) =>{
    // make use of urlConfig

    // 1. send request to authentication service
    // 2. send request to authorization service
    // 3. send request to the requested resource
    request. // HTTP method
}
}

router.post('/poll/create ', (req, res) =>{
    // make use of urlConfig

    // 1. send request to authentication service
    // 2. send request to authorization service
    // 3. send request to the requested resource
    request. // HTTP method
}
}

router.get('/poll/:id', (req, res) =>{
    // make use of urlConfig

    // 1. send request to authentication service
    // 2. send request to authorization service
    // 3. send request to the requested resource
    request. // HTTP method
}
}

router.get('/poll/result/:id', (req, res) =>{
    // make use of urlConfig

    // 1. send request to authentication service
    // 2. send request to authorization service
    // 3. send request to the requested resource
    request. // HTTP method
}
}

router.put('/poll/update', (req, res) =>{
    // make use of urlConfig

    // 1. send request to authentication service
    // 2. send request to authorization service
    // 3. send request to the requested resource
    request. // HTTP method
}
}

router.delete('/delete/:id', (req, res) =>{
    // make use of urlConfig

    // 1. send request to authentication service
    // 2. send request to authorization service
    // 3. send request to the requested resource
    request. // HTTP method
}
}