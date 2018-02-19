# Web 

The web service is responsible for providing the UI of the voting-app.

## Folder structure

```
.
├── build
├── config
├── src
│   ├── assets
│   ├── components
│   └── router
├── static
└── test
    └── unit
        └── specs
```

## Front-end routes



## HTTP back-end requests

| Endpoint       | HTTP Method | CRUD      |           Result |
| -------------- | :---------: | ----------: | ---------------: |
| /user/login    |    POST     |      CREATE |     login a user |
| /user/register |    POST     |      CREATE |  register a user |
| /user/:id      |     GET     |        READ |  retrieve a user |
| /user/update   |     PUT     |      UPDATE | update user info |
| /user/delete   |   DELETE    |      DELETE |    delete a user |
| /poll/:id     | GET | READ  | retrieve a poll |
| /poll/share | POST | CREATE | share a poll with social media api  |
| /poll/result/:id | GET | READ | retrieve the aggregate result of a poll  |
| /poll/delete/:id | DELETE | DELETE | Delete a specific poll |
| /poll/create | POST | CREATE | create a poll |
| /poll/update | PUT    | UPDATE  | update a poll |


## API's && Dependencies

* Vue.js
* npm jest

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

## To do

Requirements:

- Data validation on login and register
*'it should not create a user when there is no password'
*'it should not create a user when there is no e-mail'
