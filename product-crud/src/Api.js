// api.js

import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

const getToken = () => {
  return localStorage.getItem('token');
};

const axiosWithAuth = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosWithAuth.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const getProducts = async () => {
  try {
    const response = await axiosWithAuth.get('/products/all');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

// Add more functions for other API requests...

export default axiosWithAuth;
