const {Activity} = require("../DB_connection");

const getActivitiesController = async () => {
  try {
    const activities = await Activity.findAll();

    if(activities.length > 0) {
      return activities;
    };

  } catch (error) {
    throw error;
  };
};

module.exports = {
  getActivitiesController
}