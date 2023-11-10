const {getCountriesByNameController} = require("../controllers/getCountriesByNameController");

const getCountriesByName = async (req, res) => {
  try {
    const {name} = req.query;

    if(!name) return res.status(400).json({error: "Data is missing"});

    const countries = await getCountriesByNameController(name);

    if(!countries) return res.status(403).json({error: "There is not a country with that name."})

    return res.status(200).json(countries);

  } catch (error) {
    return res.status(500).json({error: error.message});
  };
}

module.exports = {
  getCountriesByName
}