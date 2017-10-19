const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/':
      res.setHeader('Content-type', 'text/plain');
      res.write('Home');
      break;
    case '/presentation.html':
      res.setHeader('Content-type', 'text/html');
      const data = fs.readFileSync(__dirname + '/presentation.html');
      res.write(data);
      break;
    case '/api/contacts/1':
      res.setHeader('Content-type', 'application/json');
      res.write(JSON.stringify({prenom: 'Romain'}));
      break;
    case '/redirect':
      res.statusCode = 302;
      res.setHeader('Location', 'http://www.google.fr/');
      break;
    default:
      res.statusCode = 404;
      res.setHeader('Content-type', 'text/plain');
      res.write('Not found');
  }
  res.end();
});

server.on('error', (err) => {
  console.log('Error : ', err.message);
});

server.listen(1234, () => {
  console.log('Server started');
});
