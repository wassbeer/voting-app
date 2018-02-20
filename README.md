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

## API Specification

Please visit these endpoints for API specification:
*  http://localhost:3000/polls/api-docs/
*  http://localhost:3000/users/api-docs/
*  http://localhost:3000/apigateway/api-docs/