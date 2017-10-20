const contact = {
  prenom: 'Romain',
  helloAsync() {
    setTimeout(function() {
      console.log(`Bonjour je m'appelle ${this.prenom}`);
    }, 1000);
  }
};

contact.helloAsync();


const contactClosure = {
  prenom: 'Romain',
  helloAsync() {
    const that = this;
    setTimeout(function() {
      console.log(`Bonjour je m'appelle ${that.prenom}`);
    }, 1000);
  }
};

contactClosure.helloAsync();


const contactArrow = {
  prenom: 'Romain',
  helloAsync() {
    setTimeout(() => {
      console.log(`Bonjour je m'appelle ${this.prenom}`);
    }, 1000);
  }
};

contactArrow.helloAsync();



const contactBind = {
  prenom: 'Romain',
  hello() {
    console.log(`Bonjour je m'appelle ${this.prenom}`);
  },
  helloAsync() {
    setTimeout(this.hello.bind(this), 1000);
  }
};

contactBind.helloAsync();


const hello = function() {
  console.log(`Bonjour je m'appelle ${this.prenom}`);
};

hello.call(contact);

function bind(applyThis, cb) {
  return function() {
    cb.call(applyThis);
  }
}
