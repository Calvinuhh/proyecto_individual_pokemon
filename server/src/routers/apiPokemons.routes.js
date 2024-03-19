const { Router } = require("express");
const createPokemonsDB = require("../controllers/createPokemonsDB");
const pokemonsAPI = require("../controllers/pokemonsAPI");
const pokemonsAPIById = require("../controllers/pokemonsAPIById");

const apiPokemonsRouter = Router();

apiPokemonsRouter.get("/pokemons_db", createPokemonsDB);
apiPokemonsRouter.get("/pokemons_data", pokemonsAPI);
apiPokemonsRouter.get("/pokemons_data/:id", pokemonsAPIById);

module.exports = apiPokemonsRouter;
