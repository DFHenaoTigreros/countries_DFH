import {GET_COUNTRIES, SEARCH_COUNTRIES, CURRENT_PAGE, PREV_PAGE, NEXT_PAGE, ORDER_ALPHABET, ORDER_POPULATION, FILTER_CONTINENT, FILTER_SEASON} from "../action-types/action-types"

const initialState = {
  allCountries: [],
  countries: [],
  page: 1,
  elements: 10,
};

const reducer = (state = initialState, {type, payload}) => {
  switch(type) {
    case GET_COUNTRIES:
      return {...state, allCountries: payload, countries: payload};
    case SEARCH_COUNTRIES:
      return {...state, countries: payload, page: 1}
    case CURRENT_PAGE:
      return {...state, page: payload};
    case PREV_PAGE:
      return {...state, page: state.page + payload};
    case NEXT_PAGE:
      return {...state, page: state.page + payload};
    case ORDER_ALPHABET:
      return {...state, countries: payload === "A-Z" ? [...state.countries].sort((a, b) => a.country.name.localeCompare(b.country.name)) : [...state.countries].sort((a, b) => b.country.name.localeCompare(a.country.name)), page: 1};
    case ORDER_POPULATION:
      return {...state, countries: payload === "Largest Population" ? [...state.countries].sort((a, b) => b.country.population - a.country.population) : [...state.countries].sort((a, b) => a.country.population - b.country.population), page: 1};
    case FILTER_CONTINENT:
      return {...state, countries: payload === "All" ? state.allCountries : [...state.allCountries.filter((country) => country.country.continent === payload)]};
    case FILTER_SEASON:
      return {...state, countries: payload === "All" ? state.allCountries : [...state.allCountries.filter((country) => { return country.activities ? country.activities.some((activity) => activity.season === payload) : false}
      )]};
    default:
      return {...state};
  };
};

export default reducer;