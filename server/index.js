const server = require("./src/app");
const database = require("./src/database/db");
const PORT = 3001;

database.sync({alter: true}).then(() => {
  server.listen(PORT, () => {
    console.log("Conexion con la base de datos exitosa");
    console.log(`Server listening on port: http://localhost:${PORT}`);
  });
});
