/* File System */
const fs = require('fs');
const path = require('path');

const loremPath = path.join('.', path.sep, 'files', 'lorem.txt');

fs.readFile(loremPath, 'utf-8', (error, data) => {
  if (error) console.log(`Error: ${error}`);
  console.log(data);
});

console.log('Se realizo la lectura');

fs.writeFile(loremPath, ' - Hello From Node 👀', { flag: 'a' }, (error) => {
  if (error) console.log(`Error: ${error}`);
  console.log('Async writing finish');
});

console.log('Se realizo la escritura');
