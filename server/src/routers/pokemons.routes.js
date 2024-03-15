const { Router } = require("express");
const getPokemons = require("../controllers/getPokemons");
const getPokemonById = require("../controllers/getPokemonById");
const pokemonsRouter = Router();

pokemonsRouter.get("/pokemons", getPokemons);
pokemonsRouter.get("/pokemons/:id", getPokemonById);
pokemonsRouter.post("")

module.exports = pokemonsRouter;
