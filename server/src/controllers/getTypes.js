const Type = require("../models/Type");

const getTypes = async (req, res) => {
  try {
    const types = await Type.findAll();

    res.status(200).json(types);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

module.exports = getTypes;
