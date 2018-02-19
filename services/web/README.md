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
```

## UI routes


| Route           | Access       |
| --------------  | :----------: |
| /ping           | public       |
| /home           | Public       |
| /register       | Public       | 
| / login         | Public       |
| /poll           | Public       |
| /user/:id       | Authenticated|
| /create/poll    | Authenticated|
| /account        | Authenticated|

## HTTP request routes

| Endpoint       | HTTP Method | CRUD      |           Result |
| -------------- | :---------: | ----------: | ---------------: |
| /user/login    |    POST     |      CREATE |     login a user |
| /user/register |    POST     |      CREATE |  register a user |
| /user/:id      |     GET     |        READ |  retrieve a user |
| /user/update   |     PUT     |      UPDATE | update user info |
| /user/delete   |   DELETE    |      DELETE |    delete a user |
| /poll/share    |   POST      | CREATE      | share a poll     |
| /poll/create   |   POST      | CREATE | create a poll |
| /poll/:id      |   GET       | READ        |  retrieve a poll |
| /poll/result/:id | GET | READ | retrieve poll result  |
| /poll/update | PUT    | UPDATE  | update a poll |
| /poll/delete/:id | DELETE | DELETE | Delete a specific poll |


## API's && Dependencies

* Vue.js
* Vuex
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
