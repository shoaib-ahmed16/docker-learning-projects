const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`
    <h1>Hello from this NodeJS app!!!!!!</h1>
    <h4>This is new Change add!!!</h4>
    <p>Try sending a request to /error and see what happens</p>
  `); 
});

app.get('/error', (req, res) => {
  process.exit(1);
});

app.listen(8080);
