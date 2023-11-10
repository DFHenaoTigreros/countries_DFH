const Router = require("express");
const {getCountries} = require("../handlers/getCountries")
const {getCountriesById} = require("../handlers/getCountriesById")
const {getCountriesByName} = require("../handlers/getCountriesByName")
const {postActivities} = require("../handlers/postActivities")
const {getActivities} = require("../handlers/getActivities")

const router = Router();

router.get("/countries", getCountries);

router.get("/countries/name", getCountriesByName);

router.get("/countries/:id", getCountriesById);

router.post("/activities", postActivities);

router.get("/activities", getActivities);


module.exports = {
  router
}
