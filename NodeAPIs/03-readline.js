const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);

rl.question('Quand est ce qu\'on déj ?', (line) => {
  console.log(line);
  rl.question('Quand est ce qu\'on déj ?', (line) => {
    console.log(line);
    rl.close();
  });
});

/*
rl.on('line', (line) => {
  console.log('event line', line);
});
*/
