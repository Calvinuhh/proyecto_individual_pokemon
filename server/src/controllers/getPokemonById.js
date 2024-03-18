const Pokemon = require("../models/Pokemon");

const getPokemonById = async (req, res) => {
  const { id } = req.params;

  try {
    const pokemonId = await Pokemon.findByPk(id);

    res.status(200).json(pokemonId);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = getPokemonById;
