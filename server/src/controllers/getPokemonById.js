const Pokemon = require("../models/Pokemon");
const Type = require("../models/Type");

const getPokemonById = async (req, res) => {
  const { id } = req.params;

  try {
    const pokemonId = await Pokemon.findOne({
      where: {
        id: id,
      },
      include: {
        model: Type,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });

    res.status(200).json(pokemonId);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = getPokemonById;
