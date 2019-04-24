const express = require('express');
const bodyParser = require('body-parser');
const { Author } = require('./sequelize');

const app = express();
app.use(bodyParser.json());

app.get('/api/authors', (req, res) => {
  Author.findAll().then(authors => res.json(authors));
});

const port = 3000;
app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`);
});