# Authentication Service

The Authentication Service is responsible for the authentication of users upon signup, login and visiting authenticated routes.

## Folder structure

```
.
├── config
│   ├── main-config.js
│   └── route-config.js
├── node_modules
├── routes
│   └── authentication.js
├── test
│   └── routes.authentication.test.js
├── app.js
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

## URI endpoints

 URI endpoints

| Endpoint                 | HTTP Method | CRUD Method |              Result                                   |
| ------------------------ | :---------: | ----------: | ----------------------------------------------------: |
| /authentication/signup   |    POST     |   CREATE    | hash password and provide JWT upon signup             |
| /authentication/login    |     POST    |   CREATE    | bcrypt compare password and provide JWT upon login    |
| /authentication/verify   |     POST    |   CREATE    | verify a JWT for authenticated routes                 |
| /authentication/update   |     PUT     |   UPDATE    | hash a newly created password                         |

## API's && Dependencies

* npm jsonwebtoken
* npm mocha, chai
* npm express

## Reference

[Your Node.js Authentication Tutorial is (probably) Wrong](https://hackernoon.com/your-node-js-authentication-tutorial-is-wrong-f1a3bf831a46)

[Authenticate a node.js api with json web tokens]( https://scotch.io/tutorials/authenticate-a-node-js-api-with-json-web-tokens)


