const {getActivitiesController} = require("../controllers/getActivitiesController");

const getActivities = async (req, res) => {
  try {
    const activities = await getActivitiesController();

    if(!activities) return res.status(403).json({error: "No data in the DataBase"})

    return res.status(200).json(activities);
    
  } catch (error) {
    return res.status(500).json({error: error.message});
  };
}

module.exports = {
  getActivities
}