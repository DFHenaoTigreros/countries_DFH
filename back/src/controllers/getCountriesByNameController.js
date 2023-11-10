const {Country, Activity, CountryActivity} = require("../DB_connection");
const {Op} = require("sequelize");

const getCountriesByNameController = async (name) => {
  try {
    const countries = await Country.findAll({where: {name: {[Op.iLike]: `%${name}%`}}})

    if(countries.length > 0) {
      const allCountries = await Promise.all(countries.map(async (country) => {

        if(country) {
          const countryActivities = await CountryActivity.findAll({where: {CountryId: country.id}});
    
          if (countryActivities.length > 0) {
            const activityIds = countryActivities.map((item) => item.ActivityId);
    
            if(activityIds.length > 0) {
              const activities = await Activity.findAll({where: {id: activityIds}});
    
              if (activities.length > 0) {
                return {country, activities};
              };
            };
          };
    
          return {country: country};
          
        };
      }));

      return allCountries;

    };
  } catch (error) {
    throw error;
  };
};

module.exports = {
  getCountriesByNameController
};