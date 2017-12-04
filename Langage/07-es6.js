// REST params
const sum = (...nbs) => nbs.reduce((acc, nb) => acc + nb);
console.log(sum(1, 2, 3, 4, 5)); // 15

const nbs = [1, 2, 3];

nbs.forEach((...args) => {
  console.log(args);
});

// SPREAD operator array (ES6)
console.log(sum(nbs[0], nbs[1], nbs[2])); // ES5
console.log(sum(...nbs)); // ES6
const autreNbs = [...nbs, 4, 5, 6];
const clone = [...nbs];

// SPREAD operator object (ESNext)
const coords2D = {
  x: 10,
  y: 20,
};

const coords3D = {
  ...coords2D,
  z: 30,
};

// Object.assign
const cloneES6 = Object.assign({}, coords3D);
const cloneESNext = {...coords3D};

// Lodash
// const cloneDeepLodash = _.cloneDeep(coords3D);

// class

class Contact {
    constructor(prenom) {
      this._prenom = prenom;
    }
    hello() {
        return `Bonjour prototype je m'appelle ${this._prenom}`;
    }
}

const romain = new Contact('Romain');
console.log(romain.hello());
console.log(typeof Contact); // function
console.log(typeof Contact.prototype.hello); // function

// Destructurer
const {x: xFromCoords, y, z = 20, ...autresCles} = coords3D;
const [nb1, nb2, ...autres] = nbs;
