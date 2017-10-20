const fs = require('fs');
const path = require('path');

const log = (filePath, msg) => {
  const line = `[${(new Date).toISOString()}] ${msg}\n`;
  fs.appendFileSync(filePath, line);
};

const logDir = path.resolve(__dirname, 'logs');
const logFile = path.resolve(logDir, 'app.log');

console.time('Done');
try {
  const stat = fs.statSync(logDir);
}
catch (err) {
  fs.mkdirSync(logDir);
}

try {
  log(logFile, 'Ligne 1');
  log(logFile, 'Ligne 2');
  log(logFile, 'Ligne 3');
  log(logFile, 'Ligne 4');
  log(logFile, 'Ligne 5');
  console.log('Logs done');
  console.timeEnd('Done');
}
catch (err) {
  console.log("Erreur pendant l'écriture");
}
