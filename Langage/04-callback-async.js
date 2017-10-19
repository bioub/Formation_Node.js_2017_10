
setTimeout(function() {
  console.log(arguments);
}, 1000);

const nbs = [1, 2, 3];

Array.prototype.forEachAsync = function(cb) {
  for (var i=0; i<this.length; i++) {
    process.nextTick(cb, this[i], i, this);
  }
};

nbs.forEachAsync(function(nb) {
  console.log(nb);
});

console.log('end');
