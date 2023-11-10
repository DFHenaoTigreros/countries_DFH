const {postActivitiesController} = require("../controllers/postActivitiesController");

const postActivities = async (req, res) => {
  try {
    const {name, difficulty, duration, season, countries} = req.body;

    if(!name || !difficulty || !duration || !season || !countries) return res.status(400).json({error: "Data is missing"});

    const message = await postActivitiesController(name, difficulty, duration, season, countries);

    if(!message) return res.status(403).json({error: "Wrong Operation"});

    return res.status(200).json({message: message});

  } catch (error) {
    return res.status(500).json({error: error.message});
  }
}

module.exports = {
  postActivities
}