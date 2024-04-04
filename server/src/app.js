const express = require("express");
const { json } = require("express");
const cors = require("cors");
const apiPokemonsRouter = require("./routers/apiPokemons.routes");
const apiTypesRouter = require("./routers/apiTypes.routes");
const pokemonsRouter = require("./routers/pokemons.routes");
const typesRouter = require("./routers/types.routes");
const { FRONTEND_URL } = process.env;

const server = express();

server.use(
  cors({
    origin: FRONTEND_URL,
  })
);
server.use(json());
server.use("/server/api", apiPokemonsRouter);
server.use("/server/api", apiTypesRouter);
server.use("/server", pokemonsRouter);
server.use("/server", typesRouter);

module.exports = server;

