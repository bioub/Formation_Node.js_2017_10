const fs = require('fs-extra');
const path = require('path');
const util = require('util');

const logDir = path.resolve(__dirname, 'logs');
const logFile = path.resolve(logDir, 'app.log');

const log = (filePath, msg) => {
  const line = `[${(new Date).toISOString()}] ${msg}\n`;
  return fs.appendFile(filePath, line);
};

console.time('Done');
console.time('thread dispo');

async function logs() {
  try {
    try {
      const stat = await fs.stat(logDir);
    }
    catch (err) {
      await fs.mkdir(logDir);
    }

    await log(logFile, 'Ligne 1');
    await log(logFile, 'Ligne 2');
    await log(logFile, 'Ligne 3');
    await log(logFile, 'Ligne 4');
    await log(logFile, 'Ligne 5');
    console.log('Logs done');
    console.timeEnd('Done');
  }
  catch (err) {
    console.log("Erreur pendant l'écriture");
  }

}

logs();
console.timeEnd('thread dispo');
