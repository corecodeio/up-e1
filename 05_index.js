/* Http */
const http = require('http');

const requestHandler = (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.write(`
    <html>
      <head>
        <title> HTTP Example</title>
        <style>h1{ color: blue} body{ background-color: black}</style>
      </head>
      <body>
        <h1>CORE CODE</h1>
      </body>
    </html>
  `);
  res.end();
};

const server = http.createServer(requestHandler);

server.listen(8500);
