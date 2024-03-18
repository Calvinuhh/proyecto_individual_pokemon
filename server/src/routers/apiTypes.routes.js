const { Router } = require("express");
const createTypesApi = require("../controllers/createTypesApi");

const apiTypesRouter = Router();

apiTypesRouter.get("/types", createTypesApi);

module.exports = apiTypesRouter;
