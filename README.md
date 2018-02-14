# Voting Application

## Architecture

The application is built in a microservice architecture. The application contains 7 microservices residing in 9 Docker containers. 


|		Name      | Service   |Container   |  Tech     |
|-------------|-----------|-------|-----------------|
Web| web            |web            | Vue.js, Vuex|Polls DB       
|API Gateway       |apigateway|apigateway| Node, Express
|Polls API          |polls        |polls            | Node, Express
|Polls DB       | polls |polls-db| MongoDB
Users API       |users|users| Node, Express
|Users DB      |users|users-db| MongoDB
|Authentication       |authentication|authentication| Node,  Express, passport
|Authorization       |authorization| authorization | Node, Express, ACL 
|Social Media       |social-media| social-media | Node, Express

## Repository Structure 

├── services
│   ├── web
│   ├── apigateway
│   ├── polls
│   │   └── src
│   │       └── db
│   ├── users
│   │   └── src
│   │       └── db
│   ├── authentication
│   ├── authorization
│   └── social media

## API Specification

Please visit these endpoints for API specification:
*  http://localhost:3000/polls/api-docs/
*  http://localhost:3000/users/api-docs/
*  http://localhost:3000/apigateway/api-docs/

The specification is powered by Swagger.