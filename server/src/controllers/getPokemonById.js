const axios = require("axios");
const url = "https://pokeapi.co/api/v2/pokemon/";

const getPokemonById = async (req, res) => {
  const { id } = req.params;

  try {
    const pokemon = await axios(`${url+id}`);
    res.status(200).json({
      id: pokemon.data.id,
      name: pokemon.data.name,
      image: pokemon.data.sprites.other["official-artwork"].front_default
        ? pokemon.data.sprites.other["official-artwork"].front_default
        : pokemon.data.sprites.other.dream_world.front_default,
      life: pokemon.data.stats[0].base_stat,
      attack: pokemon.data.stats[1].base_stat,
      defense: pokemon.data.stats[2].base_stat,
      speed: pokemon.data.stats[5].base_stat,
      height: pokemon.data.height,
      weight: pokemon.data.weight,
    });
  } catch (error) {
    res.status(404).json(error.message);
  }
};

module.exports = getPokemonById;
