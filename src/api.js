import axios from 'axios';

const BACKEND_URL = 'http://localhost:3001';
const TIMEOUT = 5000;

const createApi = () => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: TIMEOUT,
  });

  return api;
};

export {createApi};
