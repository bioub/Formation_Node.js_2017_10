function externe(msg) {

  function interne() {
    console.log(msg);
  }

  return interne;

}

const hello = externe('Hello');
hello();

const helloAsync = (msg) => {
  setTimeout(() => {
    console.log(msg);
  }, 1000);
};

helloAsync('Hello');


// 3 3 3 (sans closure)
for (var i=0; i<3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

// 0 1 2 (avec closure)
for (var i=0; i<3; i++) {
  setTimeout(externe(i), 1000);
}
