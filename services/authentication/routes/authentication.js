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

*/

router.post("/signup", (req, res) => {
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

            // router.post('/create', (req, res) => {
            //     let user = ({
            //         name: req.body.name,
            //         email: req.body.email,
            //         password: req.body.password
            //     });
            //     queries.createUser(user)
            //         .then((user) => {
            //             res.status(201).json({
            //                 status: 'success',
            //                 data: user
            //             });
            //         }).catch((err) => {
            //             res.status(500).json({
            //                 status: 'error',
            //                 data: err
            //             });
            //         });
            // });


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

            // 2. If the user is not succesfully registered due to e-mail already taken


        });
    });
})


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
        bcrypt.compare(req.body.password, user.password, (err, result) => {
            if (err) { console.error(err); } else {
                switch (result === true) {
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
                        break;
                }
            }
        });
    })
});

router.post("/verify", (req, res) => {
    jwt.verify(req.body.token, secret, function (err, decoded) {
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

module.exports = router;
