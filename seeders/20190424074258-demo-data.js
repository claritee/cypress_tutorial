'use strict';

const { Author } = require('../sequelize');

module.exports = {
  up: (queryInterface, Sequelize) => {
    // return Author.create({
    //   first_name: "Sheryl",
    //   last_name: "Sandberg"
    // });
    return Author.bulkCreate([
      {
        first_name: "Jane",
        last_name: "Austen"
      },
      {
        first_name: "J.K.",
        last_name: "Rowling"
      },
      {
        first_name: "Malcolm",
        last_name: "Gladwell"
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Author.destroy({
      where: {},
      truncate: true
    });
  }
};
