import axios from 'axios';

const api = axios.create({
  // baseURL: "http://192.168.1.1:3000"
  baseURL: "https://api.github.com"
})

export default api;

