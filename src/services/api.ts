import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://restaurantsystem-backend.herokuapp.com/'
})
