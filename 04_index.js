/* Http */
const http = require('http');

const requestHandler = (req, res) => {
  console.log(req.url, req.method);
};

const server = http.createServer(requestHandler);

server.listen(8500);
