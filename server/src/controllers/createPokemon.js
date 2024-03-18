const Pokemon = require("../models/Pokemon");

const createPokemon = async (req, res) => {
  const { id, name, image, life, attack, defense, speed, height, weight } =
    req.body;
  try {
    const newPokemon = await Pokemon.create({
      id,
      name: name.toLowerCase(),
      image,
      life,
      attack,
      defense,
      speed,
      height,
      weight,
    });
    res.status(201).json(newPokemon);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = createPokemon;
