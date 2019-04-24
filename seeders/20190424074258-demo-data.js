'use strict';

const { Author, Book } = require('../sequelize');

module.exports = {
  up: (queryInterface, Sequelize) => {
    Author.create({
      first_name: "Dan",
      last_name: "Pink"
    }).then((author) => {
      return Book.create({
        title: "Drive",
        author_id: author.id
      });
    });
    
    Author.create({
      first_name: "Sheryl",
      last_name: "Sandberg"
    }).then((author) => {
      return Book.create({
        title: "Lean In",
        author_id: author.id
      });
    });
    
    return Author.create({
      first_name: "Malcolm",
      last_name: "Gladwell"
    }).then((author) => {
      return Book.create({
        title: "Outliers",
        author_id: author.id
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    Author.destroy({
      where: {},
      truncate: true
    });

    return Book.destroy({
      where: {},
      truncate: true
    });
  }
};
