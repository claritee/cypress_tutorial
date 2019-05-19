'use strict';

const { Author, Book } = require('../sequelize');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Author.findOrCreate({
        where: {
          first_name: 'Annabel',
          last_name: 'Crabb'
        }
      }).then(([author, created]) => {
        return Book.findOrCreate({
          where: {
            title: 'The Wife Drought',
            author_id: author.id
          }
        });
    });
  },

  down: (queryInterface, Sequelize) => {
    Book.findOne({
      where: {
        title: 'The Wife Drought'
      }
    }).then((book) => {
      return Book.destroy({
        where: {
          id: book.id
        }
      });
    });

    return Author.findOne({
      where: {
        first_name: 'Annabel',
        last_name: 'Crabb'
      }
    }).then((author) => {
      return Author.destroy({
        where: {
          id: author.id
        }
      });
    });
  }
};
