import axios from "axios";

const baseUrl = 'http://sujeitoprogramador.com/'

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
