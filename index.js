const express = require('express');
const bodyParser = require('body-parser');
const { Author } = require('./sequelize');

const app = express();
app.use(bodyParser.json());

app.get('/api/authors', (req, res) => {
  Author.findAll().then(authors => res.json(authors));
});

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

const port = 3000;
app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`);
});