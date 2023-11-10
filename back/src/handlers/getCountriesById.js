const {getCountriesByIdController} = require("../controllers/getCountriesByIdController");

const getCountriesById = async (req, res) => {
  try {
    const {id} = req.params;

    if(!id) return res.status(400).json({error: "Data is missing"});

    const country = await getCountriesByIdController(id);

    if(!country) return res.status(403).json({error: "This ID does not exist"})

    return res.status(200).json(country);

  } catch (error) {
    return res.status(500).json({error: error.message});
  };
};

module.exports = {
  getCountriesById
};