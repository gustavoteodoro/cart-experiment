import { API_URL } from '../utils/consts';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const getProducts = () => fetch(
  `${API_URL}/products.json`,
  {
    headers,
    method: 'GET',
  },
);
