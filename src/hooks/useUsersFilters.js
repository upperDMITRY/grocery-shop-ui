import axios from 'axios';
import { useQuery } from 'react-query';

export const useUsersFilters = (filters, token) =>
  useQuery(['usersFilters', filters, token], fetchApi, {
    retry: 0,
    staleTime: 60 * 1000 * 5,
    cacheTime: 0,
  });

const fetchApi = async (context) => {
  const [, { email, pageNumber }, token] = context.queryKey;
  try {
    const res = await axios({
      method: 'get',
      url: `/api/admin/users/?email=${email}&pageNumber=${pageNumber}`,
      headers: {
        Authorization: `${token}`,
      },
    });
    if (res.status >= 200 && res.status < 300) {
      return res.data;
    }
  } catch (err) {
    if (axios.isAxiosError(err)) {
      if (err && err.response) {
        throw Error(err.response.data.message);
      }
    }
  }
};
