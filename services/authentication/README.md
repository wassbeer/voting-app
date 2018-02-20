# Authentication Service

The Authentication Service is responsible for the authentication of users upon login and page visit.

## Folder structure

```
.
├── config
│   ├── main-config.js
│   └── route-config.js
├── node_modules
├── routes
│   └── auth.js
├── app.js
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

## URI endpoints

| Endpoint          | HTTP Method |          Result |
| ----------------- | :---------:  | --------------: |
| /authenticate/login     |    POST     | authenticate a user upon login|
| /authenticate/verify   |     POST     | authenticate a user upon visiting a page |

## API's && Dependencies

* npm jsonwebtoken
* npm mocha, chai
* npm express

## Reference

[Your Node.js Authentication Tutorial is (probably) Wrong](https://hackernoon.com/your-node-js-authentication-tutorial-is-wrong-f1a3bf831a46)
[Authenticate a node.js api with json web tokens]( https://scotch.io/tutorials/authenticate-a-node-js-api-with-json-web-tokens)


