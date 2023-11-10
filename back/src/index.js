const axios = require("axios");
const {server} = require("./app");
const {conn} = require("./DB_connection.js");
const PORT = 3001;
const {Country} = require("./DB_connection");

(async () => {
  try {

    await conn.sync({force: true});

    const {data} = await axios("http://localhost:5000/countries");

    if (data.length > 0) {
      const countries = data.map((country) => {
        return {
          id: country.cca3,
          name: country.name.common,
          image: country.flags.png,
          continent: country.continents ? country.continents[0] : null,
          capital: country.capital ? country.capital[0] : null,
          subregion: country.subregion,
          area: country.area,
          population: country.population,
        };
      });

      await Country.bulkCreate(countries);
    };

    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
    
  } catch (error) {
    console.error(error);
  }
})();
