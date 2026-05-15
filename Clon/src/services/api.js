import axios from 'axios';

const BASE_URL = 'https://api.thecatapi.com/v1/images/search';
const API_KEY = 'live_6LIOP6DUHrKXIzBkZ2Pz6FwJ4RGnXIJCm0PTN5jqJL75HDPL16FwMMrgPbjCLtfO  ';

const api = axios.create({
  baseURL: BASE_URL,
});

export const getCatImage = () => {
  return api.get('', {
    
  });
};