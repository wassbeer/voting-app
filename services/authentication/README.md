# Authentication

The "authentication" container is responsible for the user authentication strategy. It responds an authentication status after receiving a client request upon login or requesting a authenticated-only page. 

## Folder structure

```
.
├── config
│   └── index.js
├── node_modules
├── src
│   ├── authentication
│   │   ├── index.js
│   │   ├── init.js
│   │   └── middleware.js
│   └── app.js
├── Dockerfile
├── gulpfile.js
├── index.js
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

## URI endpoints

| Endpoint          | HTTP Method | CRUD Method |          Result |
| ----------------- | :---------: | ----------: | --------------: |
| /authenticate/login |    POST     |      CREATE | authenticate a user login |
| /authenticate/restricted   |    POST     |      CREATE | authenticate a user upon visiting a authenticated-only page |

## API's && Dependencies

* npm passport
* npm jest
* npm express
* reddis