
![banner](https://github.com/wassbeer/voting-app/blob/master/web/src/assets/images/screenshot.jpg?raw=true)

> Home Page of the voting app

## Architecture

The application is built in a microservice architecture. The application contains five services: web, API gateway, authentication, users and polls.

## Project Structure 
```
.
├── apigateway
├── authentication
├── polls
│     └── db
├── users
│     └── db
└── web
```

How to get started?

1. npm clone https://github.com/wax-bear/voting-app.git
1. npm run setup
1. Configure the .env variables for users and polls
1. npm run docker-compose
