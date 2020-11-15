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