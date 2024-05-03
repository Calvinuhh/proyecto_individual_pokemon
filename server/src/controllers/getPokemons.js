const Pokemon = require("../models/Pokemon");
const Type = require("../models/Type");
const axios = require("axios");

const pokemonsApi = async () => {
  try {
    const api = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=50");

    const { results } = await api.data;

    const dataPokemon = results.map(async (pokemon) => {
      const info = await axios.get(pokemon.url);
      const { data } = info;

      return {
        id: data.id,
        name: data.name,
        image: data.sprites.other.home.front_default,
        life: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        speed: data.stats[5].base_stat,
        height: data.height,
        weight: data.weight,
        types: data.types.map((elem) => elem.type.name),
      };
    });

    const getAllPokemon = await Promise.all(dataPokemon);
    return getAllPokemon;
  } catch (error) {
    throw new Error(error);
  }
};

const getPokemonsDB = async () => {
  try {
    const findAllPokemons = await Pokemon.findAll({
      include: {
        model: Type,
        attributes: ["name"],
        through: { attributes: [] },
      },
    });

    const pokemonsDBFixed = findAllPokemons.map((elem) => {
      return {
        id: elem.id,
        name: elem.name,
        image: elem.image,
        life: elem.life,
        attack: elem.attack,
        defense: elem.defense,
        speed: elem.speed,
        height: elem.height,
        weight: elem.weight,
        types: elem.Types.map((elem) => elem.name),
        createdInDb: elem.createdInDb,
      };
    });

    return pokemonsDBFixed;
  } catch (error) {
    throw new Error(error);
  }
};

const getPokemons = async (req, res) => {
  const { name } = req.query;

  const pokeapi = await pokemonsApi();
  const pokeDB = await getPokemonsDB();

  const pokemons = pokeapi.concat(pokeDB);

  try {
    if (name) {
      pokemonByName = pokemons.filter(
        (elem) => elem.name === name.toLowerCase()
      );
      res.status(200).json(pokemonByName);
    } else {
      res.status(200).json(pokemons);
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { getPokemons, pokemonsApi, getPokemonsDB };
