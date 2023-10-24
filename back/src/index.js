const {server} = require("./app");
const {conn} = require('./DB_connection.js');
const PORT = 3001;

(async () => {
  try {
    await conn.sync({ force: true });
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
})();
