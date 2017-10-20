const express = require('express');
const fs = require('fs');

const app = express();

app.all('/', (req, res) => {
  res.setHeader('Content-type', 'text/plain');
  res.send('Home !');
});

app.get('/presentation.html', (req, res) => {
  res.sendFile(__dirname + '/presentation.html');
});

app.get(/\/api\/contacts\/[1-9][0-9]*/, (req, res) => {
  res.json({ prenom: 'Romain' });
});

app.all('/redirect', (req, res) => {
  res.redirect('http://www.google.fr/');
});

/*
app.use((req, res) => {
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
      res.write(JSON.stringify({ prenom: 'Romain' }));
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
*/

/*
server.on('error', (err) => {
  console.log('Error : ', err.message);
});
*/

app.listen(1234, () => {
  console.log('Server started');
});
