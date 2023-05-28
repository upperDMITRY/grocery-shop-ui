import axios from 'axios';
import { useQuery } from 'react-query';

export const useProduct = (id) =>
  useQuery(['product', id], getProduct, {
    staleTime: 60 * 1000 * 5,
    cacheTime: 0,
  });

const getProduct = async (context) => {
  const [, id] = context.queryKey;
  const res = await axios.get(`/api/products/${id}`);
  return res.data;
};
