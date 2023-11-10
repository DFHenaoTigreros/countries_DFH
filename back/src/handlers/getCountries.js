const {getCountriesController} = require("../controllers/getCountriesController");

const getCountries = async (req, res) => {
  try {
    const countries = await getCountriesController();

    if(!countries) return res.status(403).json({error: "No data in the DataBase"})

    return res.status(200).json(countries);

  } catch (error) {
    return res.status(500).json({error: error.message});
  };
};

module.exports = {
  getCountries 
}