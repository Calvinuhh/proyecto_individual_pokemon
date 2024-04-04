const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST } = require("../../config");

const database = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/pokemons`,
  { logging: false }
);

module.exports = database;
