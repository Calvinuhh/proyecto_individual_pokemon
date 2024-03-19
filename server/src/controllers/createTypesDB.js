const axios = require("axios");
const url = "https://pokeapi.co/api/v2/type";
const Type = require("../models/Type");

const createTypesDB = async (req, res) => {
  const arr = [];

  try {
    const result = await axios(url);
    const { results } = result.data;

    for (let i = 0; i < results.length; i++) {
      arr.push(results[i].url);
    }

    const promises = await arr.map((url) => axios(url));

    await Promise.all(promises).then((responses) => {
      responses.forEach((res) => {
        Type.create({
          id: res.data.id,
          name: res.data.name,
        });
      });
    });
    res.status(200).send("Types guardados en la base de datos");
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = createTypesDB;
