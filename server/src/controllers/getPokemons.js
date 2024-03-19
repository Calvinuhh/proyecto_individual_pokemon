const Pokemon = require("../models/Pokemon");
const Type = require("../models/Type");

const getPokemons = async (req, res) => {
  try {
    const { name } = req.query;

    if (name) {
      const findPokemonByName = await Pokemon.findOne({
        where: { name: name.toLowerCase() },
        include: {
          model: Type,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      });
      res.status(200).json(findPokemonByName);
    } else {
      const findAllPokemons = await Pokemon.findAll({
        include: {
          model: Type,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      });
      res.status(200).json(findAllPokemons);
    }
  } catch (error) {
    res.status(404).json(error.message);
  }
};

module.exports = getPokemons;
