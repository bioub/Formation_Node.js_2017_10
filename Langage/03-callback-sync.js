const nbs = [1, 2, 3];

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

console.log('end');
