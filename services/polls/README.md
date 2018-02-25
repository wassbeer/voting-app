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

## URI endpoints

| Endpoint          | HTTP Method | CRUD Method |              Result |
| ----------------- | :---------: | ----------: | ------------------: |
| /api/polls/create     |    POST     |      CREATE |       create a poll |
| /api/polls/ping       |     GET     |        READ |                pong |
| /api/polls/user/:id   |     GET     |        READ | get polls of a user |
| /api/polls/poll/:id   |     GET     |        READ |          get a poll |
| /api/polls/result/:id |     GET     |        READ |   get a poll result |
| /api/polls/update/:id |     PUT     |      UPDATE |         edit a poll |
| /api/polls/delete/:id |   DELETE    |      DELETE |       delete a poll |

## API's && Dependencies

* npm mongodb
* npm mocha, chai
* npm express