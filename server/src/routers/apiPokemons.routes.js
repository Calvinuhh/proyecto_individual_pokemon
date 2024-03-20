const { Router } = require("express");
const pokemonsAPI = require("../controllers/pokemonsAPI");
const pokemonsAPIById = require("../controllers/pokemonsAPIById");

const apiPokemonsRouter = Router();

apiPokemonsRouter.get("/pokemons", pokemonsAPI);
apiPokemonsRouter.get("/pokemons/:id", pokemonsAPIById);

module.exports = apiPokemonsRouter;
