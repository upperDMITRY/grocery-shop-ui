import axios from 'axios';
import { useQuery } from 'react-query';

export const useMostPopularProducts = () =>
  useQuery(['mostPopularProducts'], getMostPopularProducts, {
    staleTime: 1000 * 60 * 5,
  });

const getMostPopularProducts = async () => {
  const res = await axios.get('/api/products/mostpopular');
  return res.data;
};
