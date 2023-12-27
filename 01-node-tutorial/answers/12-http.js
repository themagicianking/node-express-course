const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/'){
    res.end('Hi this is the home page!')
  }
  else if (req.url === '/about') {
    res.end('Here is our short history.')
  }
  else {
    res.end(`
    <h1>Error!</h1>
    <p>We can't find that page...</p>
    <a href="/">go back home?</a>
    `)
  };
});

server.listen(3000);
