const contacts = [{
  prenom: 'John',
  id: '123',
}, {
  prenom: 'Pierre',
  id: '456',
}];

// GET /api/contacts
// [{"prenom": "John", "id": "123"}, {"prenom": "Pierre", "id": "456"}]

// GET /api/contacts/123
// {"prenom": "John", "id": "123"}

// GET /api/contacts/456
// {"prenom": "Pierre", "id": "456"}

// Params
// app.get('/api/contacts/:id', (req, res) => {
//   const id = req.params.id;
// });

// DELETE /api/contacts/456
// {"prenom": "Pierre", "id": "456"}
// Array.prototype.splice()
