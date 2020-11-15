const app = require('./app');
const http = require('http');
const port = process.env.PORT || '2000';
const server = http.createServer(app);

server.listen(port, () => {
	console.log('API gateway server listening on port ' + port);
});