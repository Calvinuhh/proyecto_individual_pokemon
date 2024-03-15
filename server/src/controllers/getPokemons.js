const axios = require("axios");
const url1 = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
const url2 = "https://pokeapi.co/api/v2/pokemon/";

const getPokemons = async (req, res) => {
  const arr = [];
  const dataResults = [];
  const { name } = req.query;
  try {
    if (name) {
      const pokemon = await axios(`${url2 + name.toLowerCase()}`);
      const { data } = pokemon;

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
      });
    } else {
      const result = await axios(url1);
      const { results } = result.data;

      for (let i = 0; i < results.length; i++) {
        arr.push(results[i].url);
      }

      const promises = await arr.map((url) => axios(url));

      await Promise.all(promises).then((responses) => {
        responses.forEach((res) => {
          dataResults.push({
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
      res.status(200).json(dataResults);
    }
  } catch (error) {
    res
      .status(404)
      .json({ error: "No se encontro el pokemon con el nombre: " + name });
  }
};

module.exports = getPokemons;
