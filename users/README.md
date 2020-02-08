# Users API

The Users API is responsible for the routes, database configuration and integration tests concerning users.

## Folder structure

```
.
├── node_modules
├── src
│   ├── config
│   │   ├── main-config.js
│   │   └── route-config.js
│   ├── db
│   │   ├── collections.js
│   │   ├── connection.js
│   │   └── queries.js
│   ├── routes
│   │   └── users.js
│   ├── app.js
│   └── server.js
├── test
│   └── routes.users.test.js
├── Dockerfile
├── gulpfile.js
├── mongodbfile.js
├── package.json
├── package-lock.json
└── README.md
```

## URI endpoints

| Endpoint              | HTTP Method | CRUD Method |          Result |
| --------------------- | :---------: | ----------: | --------------: |
| /api/users/create     |    POST     |      CREATE | register a user |
| /api/users/read       |    POST     |      CREATE | authenticate    |
| /api/users/read/:id   |    GET      |        READ |   get user info |
| /api/users/update/:id |    PUT      |      UPDATE |     edit a user |
| /api/users/delete/:id |    DELETE   |      DELETE |   delete a user |

## API's && Dependencies

* npm mongodb
* npm mocha, chai
* npm express
