const server = require("./src/app");
const database = require("./src/database/db");

//Development
const { PORT } = require("./config");

//Production
// const { PORT } = process.env;

database.sync({alter: true}).then(() => {
  server.listen(PORT, () => {
    console.log("Conexion con la base de datos exitosa");
    console.log(`Server listening on port: http://localhost:${PORT}`);
  });
});
