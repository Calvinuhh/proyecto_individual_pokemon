const Pokemon = require("../models/Pokemon");

const createPokemon = async (req, res) => {
  const { name, image, life, attack, defense, speed, height, weight, types } =
    req.body;
  try {
    const newPokemon = await Pokemon.create({
      name: name.toLowerCase(),
      image,
      life,
      attack,
      defense,
      speed,
      height,
      weight,
    });

    newPokemon.addTypes(types);

    res.status(201).json(newPokemon);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = createPokemon;
