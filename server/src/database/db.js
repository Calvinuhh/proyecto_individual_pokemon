const { Sequelize } = require("sequelize");
const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DATABASE_NAME,
} = require("../../config");

const database = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DATABASE_NAME}`,
  { logging: false }
);

module.exports = database;
