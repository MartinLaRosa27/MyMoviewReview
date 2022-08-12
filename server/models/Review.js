const Sequelize = require("sequelize");
const dataBase = require("../database.js");

const Review = dataBase.define("review", {
  id: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },

  nombre: {
    type: Sequelize.STRING(90),
    allowNull: false,
  },

  descripcion: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
});

module.exports = Review;
