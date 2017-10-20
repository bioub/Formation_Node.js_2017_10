const fs = require('fs');
const path = require('path');

const log = (filePath, msg, cb) => {
  const line = `[${(new Date).toISOString()}] ${msg}\n`;
  fs.appendFile(filePath, line, cb);
};

const logDir = path.resolve(__dirname, 'logs');
const logFile = path.resolve(logDir, 'app.log');


console.time('Done');
console.time('thread dispo');
fs.stat(logDir, (err, stat) => {
  if (err) {
    return fs.mkdir(logDir, () => {
      next();
    });
  }
  next();
});

function next() {
  log(logFile, 'Ligne 1', (err) => {
    if (err) {
      return console.log("Erreur pendant l'écriture");
    }
    log(logFile, 'Ligne 2', (err) => {
      if (err) {
        return console.log("Erreur pendant l'écriture");
      }
      log(logFile, 'Ligne 3', (err) => {
        if (err) {
          return console.log("Erreur pendant l'écriture");
        }
        log(logFile, 'Ligne 4', (err) => {
          if (err) {
            return console.log("Erreur pendant l'écriture");
          }
          log(logFile, 'Ligne 5', (err) => {
            if (err) {
              return console.log("Erreur pendant l'écriture");
            }
            console.log('Logs done');
            console.timeEnd('Done');
          });
        });
      });
    });
  });
}

console.timeEnd('thread dispo');
