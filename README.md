## Architecture

The application is built in a microservice architecture. The application contains 5 microservices residing in 7 Docker containers. 

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
    ├── users
    │   └── src
    │       └── db
    └── web
```

## API Specification

Please visit these endpoints for API specification:
*  http://localhost:3000/users/api-docs/
*  http://localhost:3333/apigateway/api-docs/
*  http://localhost:4000/polls/api-docs/
*  http://localhost:5000/authentication/api-docs/
*  http://localhost:6000/authorization/api-docs/