const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');
const util = require('util');

const statPromise = util.promisify(fs.stat);

const log = (filePath, msg) => {
  const line = `[${(new Date).toISOString()}] ${msg}\n`;

  return new Promise((resolve, reject) => {
    fs.appendFile(filePath, line, (err, data) => {
      if (err) {
        return reject(err);
      }
      resolve(data);
    });
  });
};

const logDir = path.resolve(__dirname, 'logs');
const logFile = path.resolve(logDir, 'app.log');

console.time('Done');
console.time('thread dispo');

statPromise(logDir)
  .catch((err) => fse.mkdir(logDir))
  .then(() => log(logFile, 'Ligne 1'))
  .then(() => log(logFile, 'Ligne 2'))
  .then(() => log(logFile, 'Ligne 3'))
  .then(() => log(logFile, 'Ligne 4'))
  .then(() => log(logFile, 'Ligne 5'))
  .then(() => {
    console.log('Logs Done');
    console.timeEnd('Done');
  })
  .catch(err => {
    console.log("Erreur pendant l'écriture");
  })

console.timeEnd('thread dispo');
