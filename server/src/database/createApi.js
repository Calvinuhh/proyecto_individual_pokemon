const axios = require("axios");
const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
const Pokemon = require("../models/Pokemon");

const createApi = async (req, res) => {
  const arr = [];
  try {
    const result = await axios(url);
    const { results } = result.data;

    for (let i = 0; i < results.length; i++) {
      arr.push(results[i].url);
    }

    const promises = await arr.map((url) => axios(url));

    await Promise.all(promises).then((responses) => {
      responses.forEach((res) => {
        Pokemon.create({
          id: res.data.id,
          name: res.data.name,
          image: res.data.sprites.other["official-artwork"].front_default
            ? res.data.sprites.other["official-artwork"].front_default
            : res.data.sprites.other.dream_world.front_default,
          life: res.data.stats[0].base_stat,
          attack: res.data.stats[1].base_stat,
          defense: res.data.stats[2].base_stat,
          speed: res.data.stats[5].base_stat,
          height: res.data.height,
          weight: res.data.weight,
        });
      });
    });
    res.status(200).send("Pokemones guardados en la base de datos");
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = createApi;
