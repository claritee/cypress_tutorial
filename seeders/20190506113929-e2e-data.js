'use strict';

const { Author, Book } = require('../sequelize');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Author.create({
      first_name: "Annabel",
      last_name: "Crabb"
    }).then((author) => {
      return Book.create({
        title: "The Wife Drought",
        author_id: author.id
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    Author.destroy({
      where: { first_name: 'Annabel', last_name: 'Crabb' },
      truncate: true
    });

    return Book.destroy({
      where: { title: 'The Wife Drought' },
      truncate: true
    });
  }
};
