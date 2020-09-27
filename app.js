const http = require('http');
const config = require('./config');
const logger = require('./logger');

const { ENV, PORT } = config;

http.createServer((req, res) => {
    logger.log('New incoming request');
    res.writeHeader(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({message: 'Hello world!'}));
}).listen(PORT, () => {
    logger.log(`Current environment: ${ENV}`);
    logger.log(`Listening on port ${PORT}`);
});
