# Polls API

The "polls" container is responsible for the controllers, database configuration and integration tests concerning polls.

## Folder structure

```
.
├── node_modules
├── src
│   ├── db
│   │   ├── seeds
│   │   │   └── polls.js
│   │   ├── connection.js
│   │   ├── Dockerfile
│   │   └── queries.js
│   ├── routes
│   │   └── polls.js
│   ├── app.js
│   └── server.js
├── test
│   └── routes.polls.test.js
├── Dockerfile
├── gulpfile.js
├── mongoosefile.js
├── package.json
├── package-lock.json
└── README.md
```