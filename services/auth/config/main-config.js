(function(appConfig){

var jwt = require('express-jwt');
 
// use JWT auth to secure the api
app.use('/api', expressJwt({ secret: config.secret }).unless({ path: ['/api/users/authenticate', '/api/users/register'] }));

})(module.exports);