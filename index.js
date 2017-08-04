const http = require('https');

const server = http.createServer((req, res) => {
  res.end('Hello');
});

server.listen(process.env.PORT || 5000);
