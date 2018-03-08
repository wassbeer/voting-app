
![banner](https://github.com/wassbeer/voting-app/blob/master/services/web/src/assets/images/screenshot.jpg?raw=true)

> Home Page of the voting app

## Architecture

The application is built in a microservice architecture. The application contains 5 microservices residing in 7 Docker containers. 

|		Name      | Service   |Container   |  Tech     |
|   -------------   |  -----------  |  -------|-----------------|
| Web| web            |web            | Vue.js, Vuex, Chart.js |
|API Gateway       |apigateway|apigateway| Node, Express |
|Polls API          |polls        |polls            | Node, Express, Mocha, Chai |
|Polls DB       | polls |polls-db| Node, MongoDB |
|  Users API       |users|  users| node.js, express, chai, supertest |
|Users DB      |users|users-db| Node, Mongodb |
|Authentication     |authentication|authentication| Node,  Express, JWT, bcrypt, Mocha, Chai |

## Repository Structure 
```
.
└── services
    ├── apigateway
    ├── authentication
    ├── polls
    │   └── src
    │       └── db
    ├── users
    │   └── src
    │       └── db
    └── web
```
