const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return
  }
  const first = result;
  writeFile('./temporary/fileB.txt',
  `Here is the result: ${first}.`,
  (err, result) => {
    if (err){
      console.log(err)
      return
    }
    console.log("first line")
  })});

  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err);
      return
    }
    const second = result;
    writeFile('./temporary/fileB.txt',
    `Here is the result: ${second}.`, {flag: 'a'},
    (err, result) => {
      if (err){
        console.log(err)
        return
      }
      console.log("second line")
    })});

readFile('./content/third.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return
  }
  const third = result;
  writeFile('./temporary/fileB.txt',
  `Here is the result: ${third}.`, {flag: 'a'},
  (err, result) => {
    if (err){
      console.log(err)
      return
    }
    console.log("third line")
  })});
  