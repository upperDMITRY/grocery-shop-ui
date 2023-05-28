import axios from 'axios';
import { useQuery } from 'react-query';

export const useUser = (email, token) =>
  useQuery(['user', email, token], getUser, {
    retry: 0,
    staleTime: 60 * 1000 * 5,
    cacheTime: 0,
  });

const getUser = async (context) => {
  const [, email, token] = context.queryKey;
  try {
    const res = await axios({
      method: 'get',
      url: `/api/admin/users?email=${email}`,
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
