import axios from 'axios';
import { useQuery } from 'react-query';

export const useSearchProducts = (pageNumber, name) =>
  useQuery([pageNumber, name], getProductsByName, {
    retry: 0,
    staleTime: 60 * 1000 * 5,
    cacheTime: 0,
  });

const getProductsByName = async (context) => {
  const [pageNumber, name] = context.queryKey;
  const res = await axios.get(
    `/api/products/search?pageNumber=${pageNumber}&name=${name}&pageSize=20`
  );
  return res.data;
};
