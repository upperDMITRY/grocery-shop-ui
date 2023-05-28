import axios from 'axios';
import { useQuery } from 'react-query';

export const useAllProducts = (pageNumber) =>
  useQuery(['allProducts', pageNumber], getAllProducts, {
    retry: 0,
    staleTime: 60 * 1000 * 5,
    cacheTime: 0,
  });

const getAllProducts = async (context) => {
  const [, pageNumber] = context.queryKey;
  const res = await axios.get(
    `/api/products?pageNumber=${pageNumber}&pageSize=20`
  );
  return res.data;
};
