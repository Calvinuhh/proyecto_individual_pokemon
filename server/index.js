const server = require("./src/app");
const database = require("./src/database/db");
const PORT = 3001;

(async function connect() {
  try {
    server.listen(PORT, () => {
      database.sync({ alter: true });
      console.log("Conexion con la base de datos exitosa");
      console.log(`Server listening on port: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
})();

require("./src/models/Pokemon");
require("./src/models/Type");
