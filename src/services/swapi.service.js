import axios from 'axios';

const swapiApi = 'https://swapi.co/api';

const get = url => {
  return axios.get(url)
    .then(response => response.data)
    .catch(err => console.log(err));
}

const getResources = (name, page = 1) => get(`${swapiApi}/${name}/?page=${page}`);

const getSingleResource = (name, id) => get(`${swapiApi}/${name}/${id}`);

export const getCharacters = page => getResources('people', page);

export const getCharacter = id => getSingleResource('people', id);
