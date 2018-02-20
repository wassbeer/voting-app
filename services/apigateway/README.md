# API Gateway

The API Gateway is the principle access service for the client. The API gateway ensures a request is authenticated and authorized before the requested resource is accessed. 

## Folder structure

```
.
├── config
│   ├── main-config.js
│   └── route-config.js
├── node_modules
├── routes
│   └── apigateway.js
├── app.js
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

## URI endpoints

| Endpoint        | HTTP Method           | CRUD Method  |  Result   |
| ------------- |:-------------:| -----:| ---: |
| /authentication/login    |    POST     |      CREATE |     login a user |
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

* npm mocha, chai
* npm express

## Reference

[The best way to perform authentication between microservices](https://hashnode.com/post/best-way-to-perform-authentication-between-microservices-cijyn2b6o00kzco53cr3xcs50)
