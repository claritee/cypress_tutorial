const express = require('express');
const bodyParser = require('body-parser');
const { Author, Book } = require('./sequelize');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/authors', (req, res) => {
  Author.findAll().then(authors => res.json(authors));
});

app.get('/api/books', (req, res) => {
  Book.findAll().then(books => res.json(books));
});

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' });
});

app.get('/login', function (req, res) {
  res.render('login', { title: 'Login', message: 'Enter a username and password' });
});

app.post('/login', function (req, res) {
  username = req.body.username;
  password = req.body.password;
  if (username == 'foo' && password == 'bar') {
    res.redirect('/books');
  } else {
    res.render('login', { title: 'Login', message: 'Username or password is invalid' });
  }
});

app.get('/books', function (req, res) {
  Book.findAll({
    include: [{ all: true }]
  }).then(books => {
    res.render('books', { title: 'Books', books: books });
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`);
});