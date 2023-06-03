import axios from 'axios';

export const apiColombia = axios.create({
  baseURL: 'https://api-colombia.com/api/v1'
});
