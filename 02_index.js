/* File System */
const fs = require('fs');
const path = require('path');

const loremPath = path.join('.', path.sep, 'files', 'lorem.txt');

const result = fs.readFileSync(loremPath, 'utf-8');

console.log(result);

// fs.writeFileSync(loremPath, ' - Hello From Node 👀', { flag: 'a' });

fs.writeFileSync(loremPath, ' - Hello From Node 👀');

console.log('Finish writing');
