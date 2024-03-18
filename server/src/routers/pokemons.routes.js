const { Router } = require("express");

const getPokemons = require("../controllers/getPokemons");
const createPokemon = require("../controllers/createPokemon");
const getPokemonById = require("../controllers/getPokemonById");

const pokemonsRouter = Router();

pokemonsRouter.get("/pokemons", getPokemons);
pokemonsRouter.post("/pokemons", createPokemon);
pokemonsRouter.get("/pokemons/:id", getPokemonById);

module.exports = pokemonsRouter;
