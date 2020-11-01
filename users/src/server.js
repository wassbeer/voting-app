require('dotenv').config();

const app = require('./app'),
	http = require('http'),
	port = process.env.PORT || '3000',
	server = http.createServer(app);

server.listen(port, () => {
	console.log('Users server listening on port ' + port);
});
