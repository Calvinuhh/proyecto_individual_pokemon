const { Router } = require("express");
const createTypesDB = require("../controllers/createTypesDB");

const apiTypesRouter = Router();

apiTypesRouter.get("/types_db", createTypesDB);

module.exports = apiTypesRouter;
