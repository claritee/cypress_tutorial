module.exports = (sequelize, type) => {
  return sequelize.define('author', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    first_name: type.STRING,
    last_name: type.STRING
  })
}