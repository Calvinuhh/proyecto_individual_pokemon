const database = require("../database/db");
const { DataTypes } = require("sequelize");

const Type = database.define(
  "Type",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    type: {
      type: DataTypes.ENUM(
        "normal",
        "fighting",
        "flying",
        "poison",
        "ground",
        "rock",
        "bug",
        "ghost",
        "steel",
        "fire",
        "water",
        "grass",
        "electric",
        "psychic",
        "ice",
        "dragon",
        "dark",
        "fairy",
        "unknown",
        "shadow"
      ),
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Type;
