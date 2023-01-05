const http = require('http');

const port = process.env.PORT || 3000;

http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end("Hello, Worldxxx!\n");
}).listen(port);

console.log(`App is running... (port: ${port})`);
