// Extensibilité
console.log(Math.random()); // 0.2367623654
console.log(Math.random); // function
console.log(Boolean(Math.random)); // true
console.log(!!Math.random); // true

console.log(Math.sum); // undefined

Math.sum = (a, b) => a + b;

console.log(Math.sum); // function
console.log(Math.sum(1, 2)); // 3
console.log(Math.sum('1', '2')); // '12'
Math.sum = (a, b) => Number(a) + Number(b);
console.log(Math.sum('1', '2')); // 3

delete Math.sum;
console.log(Math.sum); // undefined

const getRandomInt = () => Math.floor(Math.random() * 101);

console.log(getRandomInt());
const tropGrandOuTropPetit = (nb) => {
  const entierAlea = getRandomInt();
  if (nb > entierAlea) {
    return 'Plus grand';
  }

  if (nb < entierAlea) {
    return 'Plus petit';
  }

  return 'Egal';
};

const randomBackup = Math.random;
Math.random = () => 0.5;
console.log(tropGrandOuTropPetit(50));
Math.random = randomBackup;

// Nouvel objet (object literal)
const coords2d = {
  x: 10,
  y: 20,
};

const json = JSON.stringify(coords2d); // ES5.1
console.log(json);
// ... réseau
const coordsFromJson = JSON.parse(json);
console.log(coordsFromJson.x); // 10

// Fonction constructeur
const Contact = function(prenom) {
  this._prenom = prenom;
};

Contact.prototype.hello = function() {
  return 'Bonjour prototype je m\'appelle ' + this._prenom;
};

const romain = new Contact('Romain');
console.log(romain.hello());

const eric = new Contact('Eric');
console.log(eric.hello());

console.log(romain.hello === eric.hello);
