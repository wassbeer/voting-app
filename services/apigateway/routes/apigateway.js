const request = require('request-promise'),
    express = require('express'),
    router = express.Router(),
    serviceAddress = require('../config/services-config.js'),
    urlConfig = require('../config/url-config')

/* All the auth validation should be handled at the API gateway level, and 
once forwarded to a (micro)service , that service can trust the request.
*/

// verify route for pages on client side with authenticated access

/*

AVOID:
Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.

*/

router.all('/*', function (req, res, next) {
    // CORS headers
    res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    // Set custom headers for CORS
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
    if (req.method == 'OPTIONS') {
        res.status(200).end();
    } else {
        next();
    }
});

// routes

router.post("/authentication/signup", (req, res) => {
    let options = {
        method: 'post',
        body: {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        },
        json: true,
        url: "http://localhost:5000/authentication/signup"
    }
    request(options).then((signup) => {
        res.json(signup)
    }).catch((err) => {
        res.json(err);
    });
});

router.post('/authentication/login', (req, res) => {
    let options = {
        method: 'post',
        body: {
            email: req.body.email,
            password: req.body.password
        },
        json: true,
        url: 'http://localhost:5000/authentication/login'
    }
    request(options).then((loginResult) => {
        res.json(loginResult)
    }).catch((err) => {
        res.json(err);
    });
});

router.post("/authentication/verify", (req, res) => {
    let options = {
        method: 'post',
        body: {
            token: req.body.token
        },
        json: true,
        url: 'http://localhost:5000/authentication/verify'
    }
    request(options).then((verifyResult) => {
        res.json(verifyResult)
    }).catch((err) => {
        res.json(err);
    });
});

router.put('/authentication/update', (req, res) => {
    let options = {
        method: 'put',
        body: {
            password: req.body.password
        },
        json: true,
        url: 'http://localhost:5000/authentication/update/' + req.body.id
    }
    request(options).then((updateResult) => {
        res.json(updateResult)
    }).catch((err) => {
        res.json(err);
    });
});

router.get('/api/users/read/:id', (req, res) => {
let options = {
    method: 'get',
    url: 'http://localhost:3000/api/users/read/' + req.params.id,
    json: true
}
request(options).then((user) => {
    res.json(user)
}).catch((err) => {
    res.json(err);
});
});

router.delete('/api/users/delete/:id', (req, res) => {
    let options = {
        method: 'get',
        url: 'http://localhost:3000/api/users/delete/' + req.params.id,
        json: true
    }
    request(options).then((deleteStatus) => {
        res.json(deleteStatus)
    }).catch((err) => {
        res.json(err);
    });
})

router.post('/api/polls/create ', (req, res) => {
    // make use of urlConfig

    // 2. send request to authorization service
    // 3. send request to the requested resource
    // request HTTP method
})

router.get('/api/polls/user/:id', (req, res) => {
    // make use of urlConfig

    // 2. send request to authorization service
    // 3. send request to the requested resource
    // request HTTP method
})

router.get('/api/polls/poll/:id', (req, res) => {
    // make use of urlConfig

    // 2. send request to authorization service
    // 3. send request to the requested resource
    // request HTTP method
});


router.get('/api/polls/result/:id', (req, res) => {
    // make use of urlConfig

    // 2. send request to authorization service
    // 3. send request to the requested resource
    // request HTTP method
});

router.put('/api/polls/update/:id', (req, res) => {
    // make use of urlConfig

    // 2. send request to authorization service
    // 3. send request to the requested resource
    // request HTTP method
});

router.delete('/api/polls/delete/:id', (req, res) => {
    // make use of urlConfig

    // 2. send request to authorization service
    // 3. send request to the requested resource
    // request HTTP method
});

router.get('/api/users/read/:id', (req, res) => {
    // make use of urlConfig

    // 2. send request to authorization service
    // 3. send request to the requested resource
    // request HTTP method
})

module.exports = router;