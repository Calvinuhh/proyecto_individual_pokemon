const { Router } = require("express");
const createApi = require("../database/createApi");

const apiRouter = Router();

apiRouter.get("/api", createApi);

module.exports = apiRouter;

