import axios from 'axios';

const api = axios.create({
  baseURL: 'https://hygiapi.herokuapp.com',
});

export default api;
