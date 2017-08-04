const http = require('http'),
  config = require('./config/default.json'),
  fileServer = require('./fileServer'),
  paths = config.paths,
  names = config.fileNames;

const server = http.createServer((request, response) => {
  let file = [__dirname, paths.views, request.url].join('/');

  if (request.url === '/') {
    file = [__dirname, paths.views, names.mainHTML].join('/');
  }

  fileServer(file, request, response);
});

server.listen(process.env.PORT || 5000);
