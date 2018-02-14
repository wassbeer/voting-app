# Users API

The "users" container is responsible for the controllers, database configuration and integration tests concerning users.

## URI endpoints

| Endpoint        | HTTP Method           | CRUD Method  |  Result   |
| ------------- |:-------------:| -----:| ---: |
| /users/login | POST      |    CREATE | login as a user |
| /users/register | POST | CREATE | register a user |
| /users/ping      | GET | READ | pong|
| /users/user/:id      | GET  | READ |     get user info |
| /users/update/:id | PUT | UPDATE | edit a user |
| /users/delete/:id | DELETE | DELETE | delete a user |

## API's && Dependencies

* npm mongoose
* npm jest
* npm express
