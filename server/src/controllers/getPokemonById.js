const { pokemonsApi, getPokemonsDB } = require("./getPokemons");

const getPokemonById = async (req, res) => {
  const { id } = req.params;

  try {
    const pokeapi = await pokemonsApi();
    const pokeDB = await getPokemonsDB();

    const pokemons = pokeapi.concat(pokeDB);

    const pokemonById = pokemons.filter((elem) => elem.id === Number(id));

    res.status(200).json(pokemonById);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = getPokemonById;
