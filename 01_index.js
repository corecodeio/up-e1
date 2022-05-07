/* Path */
const path = require('path');

// steparator
console.log(path.sep);

// join
const loremPath = path.join(path.sep, 'files', 'ipsum.txt');
console.log(loremPath);

// basename
console.log(path.basename(loremPath));

// path relativo: ./files/ipsum.txt
// path absoluto: C:/users/yosefmarr/sessions/node/up-e1/files/ipsum.txt

// resolve
const absolPath = path.resolve(__dirname, 'file', 'ipsum.txt');
console.log(absolPath);
