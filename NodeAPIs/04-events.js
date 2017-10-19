const { EventEmitter } = require('events');

const em = new EventEmitter();

em.on('user.created', (user) => {
  console.log('on', user.prenom);
});

em.once('user.created', (user) => {
  console.log('once', user.prenom);
});


em.emit('user.created', {
  prenom: 'Romain',
});

em.emit('user.created', {
  prenom: 'Eric',
});
