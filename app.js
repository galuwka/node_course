const http = require('http');
const config = require('./config');
const logger = require('./logger');

const env = config.ENV;
const port = config.PORT;

http.createServer((req, res) => {
    logger.log('New incoming request');
    res.writeHeader(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({message: 'Hello world!'}));
}).listen(port, () => {
    logger.log(`Current environment: ${env}`);
    logger.log(`Listening on port ${port}`);
});
