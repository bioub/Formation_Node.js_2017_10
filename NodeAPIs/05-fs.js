const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '..', 'NodeAPIs', '.editorconfig');

const {base} = path.parse(__filename);
console.log(base);

try {
  const contenuEditorConfig = fs.readFileSync(filePath);
  console.log(contenuEditorConfig.toString());
}
catch (err) {
  console.log(err.code);
}

fs.readFile(filePath, (err, contenuEditorConfig) => {
  if (err) {
    return console.log(err.code);
  }
  console.log(contenuEditorConfig.toString());
});

console.log('end');
