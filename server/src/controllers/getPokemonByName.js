const axios = require("axios");
const url = "https://pokeapi.co/api/v2/pokemon/";

const getPokemonByName = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const pokemon = await axios(`${url + name}`);
      const { data } = pokemon;

      res.status(200).json({
        id: data.id,
        name: data.name,
        image: data.sprites.other["official-artwork"].front_default,
        life: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        speed: data.stats[5].base_stat,
        height: data.height,
        weight: data.weight,
      });
    }
  } catch (error) {
    res.status(500).json(message.error);
  }
};

module.exports = getPokemonByName;
