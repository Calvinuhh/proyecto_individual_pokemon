const express = require("express");
const { json } = require("express");
const cors = require("cors");
const apiRouter = require("./routers/api.routes");
const pokemonsRouter = require("./routers/pokemons.routes");
const typesRouter = require("./routers/types.routes");

const server = express();

server.use(cors());
server.use(json());
server.use("/server", apiRouter);
server.use("/server", pokemonsRouter);
server.use("/server", typesRouter);

module.exports = server;
