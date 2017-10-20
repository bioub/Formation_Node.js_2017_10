const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const contacts = [{
  prenom: 'John',
  id: '123',
}, {
  prenom: 'Pierre',
  id: '456',
}];

const app = express();

app.use(morgan('common'));
/*
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
*/

// GET /api/contacts
// [{"prenom": "John", "id": "123"}, {"prenom": "Pierre", "id": "456"}]
app.get('/api/contacts', (req, res, next) => {
  res.json(contacts);
})

/*
app.post('/api/contacts', bodyParser.json());
app.post('/api/contacts', (req, res, next) => {
  res.json(contacts);
});
*/

app.post('/api/contacts', bodyParser.json(), (req, res, next) => {
  const contact = req.body;

  contact.id = String(++contacts[contacts.length-1].id);
  contacts.push(contact);

  res.statusCode = 201;
  res.json(contact);
});

// GET /api/contacts/123
// {"prenom": "John", "id": "123"}
app.get('/api/contacts/:id', (req, res, next) => {
  const id = req.params.id;

  const contact = contacts.find(c => c.id === id);

  if (!contact) {
    return next();
  }

  res.json(contact);
});

// GET /api/contacts/456
// {"prenom": "Pierre", "id": "456"}

// Params
// app.get('/api/contacts/:id', (req, res) => {
//   const id = req.params.id;
// });

// DELETE /api/contacts/456
// {"prenom": "Pierre", "id": "456"}
// Array.prototype.splice()
app.delete('/api/contacts/:id', (req, res, next) => {
  const id = req.params.id;

  const contact = contacts.find(c => c.id === id);

  if (!contact) {
    return next();
  }

  const i = contacts.indexOf(contact);
  contacts.splice(i, 1);

  res.json(contact);
})

app.use('/api', (req, res, next) => {
  res.statusCode = 404;
  return res.json({
    msg: 'Not Found',
  });
});

app.use((req, res, next) => {
  res.statusCode = 404;
  return res.send('<h2>Not Found</h2>')
});

app.listen(8080, () => {
  console.log('http://localhost:8080/');
});
