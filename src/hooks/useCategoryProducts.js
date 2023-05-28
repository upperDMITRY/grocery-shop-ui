import axios from 'axios';
import { useQuery } from 'react-query';

export const useCategoryProducts = (pageNumber, category) =>
  useQuery([pageNumber, category], getProductsByCategory, {
    retry: 0,
    staleTime: 60 * 1000 * 5,
    cacheTime: 0,
  });

const getProductsByCategory = async (context) => {
  const [pageNumber, category] = context.queryKey;
  const res = await axios.get(
    `/api/products/category?pageNumber=${pageNumber}&category=${category}&pageSize=20`
  );
  return res.data;
};
