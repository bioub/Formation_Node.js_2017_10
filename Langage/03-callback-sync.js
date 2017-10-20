const nbs = [1, 2, 3];

const nbsDoubles = nbs.map(nb => nb * 2);
console.log(nbsDoubles.join(' - '));

nbs.forEach(function(nb, i) {
  console.log(nb, i);
});

function setTimeoutSync(cb, delay) {
  const debut = Date.now();

  while(debut + delay > Date.now()) {}

  cb();
}

setTimeoutSync(() => {
  console.log('Dans 1 sec');
}, 1000);

// acc: 0, nb: 1 => 0+1 === 1
// acc: 1, nb: 2 => 1+2 === 3
// acc: 3, nb: 3 => 3+3 === 6

const sum = nbs.reduce((acc, nb) => acc + nb, 0);
console.log(sum);

console.log('end');
