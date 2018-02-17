# Users API

The "users" container is responsible for the routes, database configuration and integration tests concerning users.

## Folder structure

```
.
├── node_modules
├── src
│   ├── db
│   │   ├── seeds
│   │   │   └── users.js
│   │   ├── connection.js
│   │   ├── Dockerfile
│   │   └── queries.js
│   ├── routes
│   │   └── users.js
│   ├── app.js
│   └── server.js
├── test
│   └── routes.users.test.js
├── Dockerfile
├── gulpfile.js
├── mongoosefile.js
├── package.json
├── package-lock.json
└── README.md
```

## URI endpoints

| Endpoint              | HTTP Method | CRUD Method |          Result |
| --------------------- | :---------: | ----------: | --------------: |
| /api/users/register   |    POST     |      CREATE | register a user |
| /api/users/ping       |    GET      |        READ |            pong |
| /api/users/user/:id   |    GET      |        READ |   get user info |
| /api/users/update/:id |    PUT      |      UPDATE |     edit a user |
| /api/users/delete/:id |    DELETE   |      DELETE |   delete a user |

## API's && Dependencies

* npm mongodb
* npm jest
* npm express