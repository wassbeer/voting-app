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

| Endpoint        | HTTP Method           | CRUD Method  |  Result   |
| ------------- |:-------------:| -----:| ---: |
| /polls/create | POST      |    CREATE | create a poll |
| /polls/ping      | GET | READ | pong|
| /polls/user/:id      | GET  | READ |     get polls of a user |
| /polls/poll/:id      | GET  | READ |     get a poll  |
| /polls/result/:id      | GET  | READ | get a poll result |
| /polls/update/:id | PUT | UPDATE | edit a poll |
| /polls/delete/:id | DELETE | DELETE | delete a poll |

## API's && Dependencies

* npm mongoose
* npm jest
* npm express
