const { Router } = require("express");
const getTypes = require("../controllers/getTypes");

const typesRouter = Router();

typesRouter.get("/types", getTypes);

module.exports = typesRouter;
