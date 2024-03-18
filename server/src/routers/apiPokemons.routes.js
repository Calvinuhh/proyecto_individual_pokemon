const { Router } = require("express");
const createPokemonsApi = require("../controllers/createPokemonsApi");

const apiPokemonsRouter = Router();

apiPokemonsRouter.get("/pokemons", createPokemonsApi);

module.exports = apiPokemonsRouter;
