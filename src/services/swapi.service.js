import axios from "axios";

const swapiApi = "https://swapi.co/api";

const get = url => {
  return axios
    .get(url)
    .then(response => response.data)
    .catch(err => console.log(err));
};

const getResources = (name, page = 1, query = "") => {
  if (query) {
    return get(`${swapiApi}/${name}/?search=${query}`);
  }
  return get(`${swapiApi}/${name}/?page=${page}`);
};

const getSingleResource = (name, id) => get(`${swapiApi}/${name}/${id}`);

export const getCharacters = (page, query) =>
  getResources("people", page, query);

export const getCharacter = id => getSingleResource("people", id);

export const getStarships = (page, query) =>
  getResources("starships", page, query);

export const getStarship = id => getSingleResource("starships", id);

export const getPlanets = (page, query) => getResources("planets", page, query);

export const getPlanet = id => getSingleResource("planets", id);
