const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello');
});

server.listen(process.env.PORT || 5000);
