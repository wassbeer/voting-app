## Architecture

The application is built in a microservice architecture. The application contains 6 microservices residing in 8 Docker containers. 

|		Name      | Service   |Container   |  Tech     |
|   -------------   |  -----------  |  -------|-----------------|
| Web| web            |web            | Vue.js, Vuex, Jest |
|API Gateway       |apigateway|apigateway| Node, Express |
|Polls API          |polls        |polls            | Node, Express, Mocha, Chai |
|Polls DB       | polls |polls-db| Node, MongoDB |
|  Users API       |users|  users| node.js, express, chai, supertest |
|Users DB      |users|users-db| Node, Mongodb |
|Authentication     |authentication|authentication| Node,  Express, JWT, Mocha, Chai |
| Authorization   | authorization  | authorization | Node, ACL  | 
|Social Media       |social-media| social-media | Node, Express |

## Repository Structure 
```
.
└── services
    ├── apigateway
    ├── authentication
    ├── authorization
    ├── polls
    │   └── src
    │       └── db
    ├── social-media
    ├── users
    │   └── src
    │       └── db
    └── web
```

## Tests

_"..a substantial bank of test cases, exploring the input range and probing its boundaries, must be prepare, run and recorderd" - Frederick P. Brooks Jr._

The application is developed in a TDD fashion. Middleware used includes Mocha, Chai on server side testing and and Jest for the client side. 

## API Specification

_"..promotion of a program to a programming product requires its thorough documentation, so that anyone may use it, fix it, and extend it" - Frederick P. Brooks Jr._

Please visit these endpoints for API specification:
*  http://localhost:3000/users/api-docs/
*  http://localhost:3333/apigateway/api-docs/
*  http://localhost:4000/polls/api-docs/
*  http://localhost:5000/authentication/api-docs/
*  http://localhost:6000/authorization/api-docs/
*  http://localhost:7000/socialmedia/api-docs/