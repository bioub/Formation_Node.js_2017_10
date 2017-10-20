const fs = require('fs-extra');

const fichiers = [
  __dirname + '/01-logs-sync.js',
  __dirname + '/02-logs-async.js',
];

Promise.all(
  fichiers.map(f => fs.readFile(f))
)
  .then(datas => {
    fs.ensureDir(__dirname + '/dist')
      .then(() => fs.remove(__dirname + '/dist/build.js'))
      .then(() => Promise.all(
        datas.map(d => fs.appendFile(__dirname + '/dist/build.js', d))
      ))
      .then(() => {
        console.log('Build done');
      });
  })
