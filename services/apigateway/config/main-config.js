(function(appConfig){

var session = require('express-session');
var bodyParser = require('body-parser');
 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({ secret: config.secret, resave: false, saveUninitialized: true }));

app.use('/', require('../routes/apigateway.js'));

})(module.exports);