import readline from 'readline';

// Si on utilise import et/ou export on est en mode strict par défaut

console.log(this); // undefined

class Contact {
  // Dans une classe on est mode strict par defaut
  constructor() {
    try {
      toto = 'truc';
    }
    catch(err) {

    }
  }
}
