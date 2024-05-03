const database = require("../database/db");
const { DataTypes } = require("sequelize");
const Type = require("./Type");

const Pokemon = database.define(
  "Pokemon",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      defaultValue:
        "https://cdn.custom-cursor.com/packs/8904/pokemon-unown-pack.png",
      isUrl: true,
      // allowNull: false
    },
    life: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    attack: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    defense: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    speed: {
      type: DataTypes.INTEGER,
    },
    height: {
      type: DataTypes.INTEGER,
    },
    weight: {
      type: DataTypes.INTEGER,
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    timestamps: false,
  }
);

Pokemon.belongsToMany(Type, { through: "pokemon_type" });
Type.belongsToMany(Pokemon, { through: "pokemon_type" });

module.exports = Pokemon;
