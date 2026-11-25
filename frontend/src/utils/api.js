import axios from 'axios';
import { getToken } from './auth';

const isLocalhostDev =
  typeof window !== 'undefined' &&
  (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') &&
  window.location.port === '3000';

export const API_BASE_URL =
  process.env.REACT_APP_API_URL ||
  (isLocalhostDev ? 'http://localhost:5000/api' : '/api');

export const AUDIO_BASE_URL = `${API_BASE_URL.replace(/\/+$/, '')}/static/audio`;

export const getAudioUrl = (path) => `${AUDIO_BASE_URL}/${path}`;

const api = axios.create({
  baseURL: API_BASE_URL,
});

api.interceptors.request.use(config => {
  const token = getToken();  // ✅ token through sessionStorage
  
  if (token && token !== 'null' && token !== 'undefined') {
    config.headers.Authorization = `Bearer ${token}`;
  }
  
  return config;
});

export default api;