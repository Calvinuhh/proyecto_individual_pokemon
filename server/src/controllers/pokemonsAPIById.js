const axios = require("axios");
const url = "https://pokeapi.co/api/v2/pokemon/";

const pokemonsAPIById = async (req, res) => {
  const { id } = req.params;
  const petition = await axios(`${url + id}`);

  const { data } = petition;

  const { types } = data;
  typesResult = types.map((type) => type.type.name);

  res.status(200).json({
    id: data.id,
    name: data.name,
    image: data.sprites.other["official-artwork"].front_default
      ? data.sprites.other["official-artwork"].front_default
      : data.sprites.other.dream_world.front_default,
    life: data.stats[0].base_stat,
    attack: data.stats[1].base_stat,
    defense: data.stats[2].base_stat,
    speed: data.stats[5].base_stat,
    height: data.height,
    weight: data.weight,
    types: typesResult,
  });
  try {
  } catch (error) {
    res.status;
  }
};

module.exports = pokemonsAPIById;
