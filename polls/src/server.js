require('dotenv').config();

const app = require('./app'),
	http = require('http'),
	port = process.env.PORT || '4000',
	server = http.createServer(app);

server.listen(port, () => {
	console.log('Polls server listening on port ' + port);
});
