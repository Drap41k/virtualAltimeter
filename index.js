const http = require('https');

const server = http.createServer((req, res) => {
  res.end('Hello');
});

server.listen(80);
