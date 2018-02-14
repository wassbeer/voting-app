# Polls API

The "polls" container is responsible for the controllers, database configuration and integration tests concerning polls.

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

## Database configuration



## API's && Dependencies

* npm mongoose
* npm jest
* npm express
