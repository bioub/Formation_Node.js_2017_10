const fs = require('fs');

process.stdout.write('Coucou');

const rs = fs.createReadStream(__dirname + '/.editorconfig');

rs.pipe(process.stdout);

// cat .editorconfig | echo
