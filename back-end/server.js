const http = require('http');
const app = require('./src/app')
const port = process.env.PORT || 4000
const server = http.createServer(app);
server.listen(port);