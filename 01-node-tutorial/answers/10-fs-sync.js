const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
const third = readFileSync('./content/third.txt', 'utf8');

writeFileSync(
  './temporary/fileA.txt',
  `Here is the result: ${first}, ${second}, ${third}`,
  {flag: 'a'}
);
