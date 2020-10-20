const http = require('http');
const {longComputation} = require('./utils');

const REPEAT = 100;

http.createServer((req, res) => {
    const start = new Date();
    longComputation(REPEAT);
    res.writeHead(200);
    res.end(`${new Date() - start}\n`);
}).listen(3000, () => console.log(`Listening on port 3000...`));
