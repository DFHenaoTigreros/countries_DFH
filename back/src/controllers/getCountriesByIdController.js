const {Country, Activity, CountryActivity} = require("../DB_connection");

const getCountriesByIdController = async (id) => {
  try {
    const country = await Country.findByPk(id);

    if(country) {
      const countryActivities = await CountryActivity.findAll({where: {CountryId: id}});

      if (countryActivities.length > 0) {
        const activityIds = countryActivities.map((item) => item.ActivityId);

        if(activityIds.length > 0) {
          const activities = await Activity.findAll({where: {id: activityIds }});

          if (activities.length > 0) {
            return {country, activities};
          };
        };
      };

      return {country: country};
      
    };
  } catch (error) {
    throw error;
  };
};

module.exports = {
  getCountriesByIdController
};
