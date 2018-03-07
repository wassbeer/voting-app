const express = require("express"),
    router = express.Router(),
    request = require("request-promise"),
    bcrypt = require("bcrypt"),
    jwt = require("jsonwebtoken"),
    secret = "theOldManAndTheSea";

/* 

 URI endpoints

| Endpoint                 | HTTP Method | CRUD Method |              Result                                   |
| ------------------------ | :---------: | ----------: | ----------------------------------------------------: |
| /authentication/signup   |    POST     |   CREATE    | hash password and provide JWT upon signup             |
| /authentication/login    |     POST    |   CREATE    | bcrypt compare password and provide JWT upon login    |
| /authentication/verify   |     POST    |   CREATE    | verify a JWT for authenticated routes                 |
| /authentication/ping     |     GET     |   READ      | api test route                                        |
| /authentication/update   |     PUT     |   UPDATE    | hash a newly created password                         |

*/

router.post("/signup", (req, res, next) => {
    bcrypt.hash(req.body.password, 10, function (err, hash) {
        let options;
        err ? console.error(err) :
            options = {
                method: "post",
                body: {
                    name: req.body.name,
                    email: req.body.email,
                    password: hash
                },
                json: true,
                url: "http://localhost:3000/api/users/create"
            };
        request(options).then((user) => {
            // 1. If the user is succesfully registered 
            const token = jwt.sign({ admin: user.data._id }, secret, { // payload, secret
                expiresIn: 1440 // expires in 24 hours
            });
            res.status(200).json({
                success: true,
                message: "Enjoy your token!",
                token: token,
                user: user.data
            });
        }).catch((err) => {
            console.log(err)
            res.status(500).json({
                success: false
            })
        })
    });
});


router.post("/login", (req, res) => {
    const options = {
        method: "post",
        body: {
            email: req.body.email
        },
        json: true,
        url: "http://localhost:3000/api/users/read"
    };
    request(options).then((user) => {
                bcrypt.compare(req.body.password, user.data.password, (err, result) => {
                    switch (result) {
                        case true:
                            token = jwt.sign({
                                admin: user._id
                            }, secret, {
                                    expiresIn: 1440 // expires in 24 hours
                                });
                            res.status(200).json({
                                success: true,
                                message: "Enjoy your token!",
                                token: token,
                                user: user.data
                            });
                            break;
                        default:
                            res.status(200).json({
                                status: "failed",
                                data: "Authentication failed. Wrong password."
                            });
                    }
                })
    }).catch((err) => {
        console.log("caught")
        res.status(404).json({ data: 'The e-mail is not registered' })
})
});


router.post("/verify", (req, res) => {
    jwt.verify(req.body.token, secret, (err, decoded) => {
        if (err) {
            return res.status(200).json({
                success: false,
                message: "Failed to authenticate token."
            });
        } else {
            return res.status(200).json({
                success: true,
                message: "Succesfuly authenticated token."
            });
        }
    });
});

router.get('/ping', (req, res) => {
    res.send('pong');
});

router.put("/update/:id", (req, res) => {
    bcrypt.hash(req.body.password, 10, function (err, hash) {
        let options = {
            method: 'put',
            body: {
                password: hash
            },
            url: "http://localhost:3000/api/users/update/" + req.params.id,
            json: true
        }
        request(options).then((update) => {
            res.status(201).json(update)
        })
            .catch((err) => {
                res.json(err);
            });
    })
})

module.exports = router;
