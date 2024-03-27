const Pokemon = require("../models/Pokemon");
const Type = require("../models/Type");
const axios = require("axios");

const pokemonsApi = async () => {
  try {
    const api = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=100");

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
    throw new Error(error.message);
  }
};

const getPokemonsDB = async () => {
  try {
    const findAllPokemons = await Pokemon.findAll({
      include: {
        model: Type,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    return findAllPokemons;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getPokemons = async (req, res) => {
  const { name } = req.query;

  const pokeapi = await pokemonsApi();
  const pokeDB = await getPokemonsDB();

  const pokemons = pokeapi.concat(pokeDB);

  if (name) {
    pokemonByName = pokemons.filter((elem) => elem.name === name.toLowerCase());
    res.status(200).json(pokemonByName);
  } else {
    res.status(200).json(pokemons);
  }
};

module.exports = { getPokemons, pokemonsApi, getPokemonsDB };
