const express = require("express");
const { json, urlencoded } = require("express");
const cors = require("cors");
const pokemonsRouter = require("./routers/pokemons.routes");

const server = express();

server.use(cors());
server.use(json());
server.use(urlencoded({ extended: true }));
server.use("/api", pokemonsRouter);

module.exports = server;
