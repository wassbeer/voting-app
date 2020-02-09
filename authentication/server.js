const app = require('./app'),
	http = require('http'),
	port = process.env.PORT || '5000',
	server = http.createServer(app);

server.listen(port, () => {
	console.log('Authentication server listening on port ' + port);
});