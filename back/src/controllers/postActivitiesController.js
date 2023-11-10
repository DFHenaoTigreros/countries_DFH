const {Country, Activity} = require("../DB_connection");

const postActivitiesController = async (name, difficulty, duration, season, countries) => {
  try {
    if (name && difficulty && duration && season) {
      const activity = await Activity.create({name, difficulty, duration, season});

      if (countries.length > 0) {
        const countriesFound = await Country.findAll({where: {id: countries}});
  
        if (countriesFound.length > 0) {
          await activity.addCountries(countriesFound);
          return "Successful operation";
        };
      };
    };
  } catch (error) {
    throw error;
  };
};

module.exports = {
  postActivitiesController
};