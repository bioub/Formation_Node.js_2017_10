const express = require('express');

const contacts = [{
  prenom: 'John',
  id: '123',
}, {
  prenom: 'Pierre',
  id: '456',
}];

const app = express();

// GET /api/contacts
// [{"prenom": "John", "id": "123"}, {"prenom": "Pierre", "id": "456"}]
app.get('/api/contacts', (req, res) => {
  res.json(contacts);
})

// GET /api/contacts/123
// {"prenom": "John", "id": "123"}
app.get('/api/contacts/:id', (req, res) => {
  const id = req.params.id;

  const contact = contacts.find(c => c.id === id);

  if (!contact) {
    res.statusCode = 404;
    return res.json({
      msg: 'Contact not Found',
    });
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
app.delete('/api/contacts/:id', (req, res) => {
  const id = req.params.id;

  const contact = contacts.find(c => c.id === id);

  if (!contact) {
    res.statusCode = 404;
    return res.json({
      msg: 'Contact not Found',
    });
  }

  const i = contacts.indexOf(contact);
  contacts.splice(i, 1);

  res.json(contact);
})

app.listen(8080, () => {
  console.log('http://localhost:8080/');
});
