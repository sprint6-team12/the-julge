import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://bootcamp-api.codeit.kr/api/06-12/the-julge',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
});
