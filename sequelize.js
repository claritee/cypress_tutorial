const Sequelize = require('sequelize')
const AuthorModel = require('./models/author')

const sequelize = new Sequelize('books', 'dev', 'password', {
  host: 'localhost',
  dialect: 'sqlite',
  storage: './store.sqlite',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const Author = AuthorModel(sequelize, Sequelize);

sequelize.sync({ force: true })
  .then(() => {
  console.log(`Database & tables created!`)
});

module.exports = {
  Author,
};