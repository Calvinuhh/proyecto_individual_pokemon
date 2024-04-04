const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DATABASE_NAME } = process.env;

const database = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DATABASE_NAME}`,
  { logging: false }
);

module.exports = database;
