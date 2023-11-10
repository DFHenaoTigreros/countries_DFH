import axios from "axios";
import {GET_COUNTRIES, SEARCH_COUNTRIES, CURRENT_PAGE, PREV_PAGE, NEXT_PAGE, ORDER_ALPHABET, ORDER_POPULATION, FILTER_CONTINENT, FILTER_SEASON} from "../action-types/action-types";

const endpoint = "http://localhost:3001/countries";

export const getCountries = () => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get(endpoint);
      return dispatch({type: GET_COUNTRIES, payload: data});
    } catch (error) {
      throw Error(error.message);
    };
  };
};

export const searchCountries = (name) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get(`${endpoint}/name?name=${name}`);
      return dispatch({type: SEARCH_COUNTRIES, payload: data});
    } catch (error) {
      alert("There is not a country with that name");
      throw Error(error.message);
    };
  };
};

export const currentPage = (page) => {
  try {
    return {type: CURRENT_PAGE, payload: page};
  } catch (error) {
    throw Error(error.message);
  };
};

export const prevPage = () => {
  try {
    return {type: PREV_PAGE, payload: -1};
  } catch (error) {
    throw Error(error.message);
  };
};

export const nextPage = () => {
  try {
    return {type: NEXT_PAGE, payload: 1};
  } catch (error) {
    throw Error(error.message);
  };
};

export const orderAlphabet = (order) => {
  try {
    return {type: ORDER_ALPHABET, payload: order};
  } catch (error) {
    throw Error(error.message);
  };
};

export const orderPopulation = (order) => {
  try {
    return {type: ORDER_POPULATION, payload: order};
  } catch (error) {
    throw Error(error.message);
  };
};

export const filterContinent = (continent) => {
  try {
    return {type: FILTER_CONTINENT, payload: continent};
  } catch (error) {
    throw Error(error.message);
  };
};

export const filterSeason = (season) => {
  try {
    return {type: FILTER_SEASON, payload: season};
  } catch (error) {
    throw Error(error.message);
  };
};




