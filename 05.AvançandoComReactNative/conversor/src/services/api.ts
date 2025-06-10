import axios from "axios";

const api = axios.create({
  baseURL: 'https://economia.awesomeapi.com.br/json/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;