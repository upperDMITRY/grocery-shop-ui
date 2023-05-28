import axios from 'axios';
import { useMutation } from 'react-query';

export const useMutationSaveUser = (cbSuccess, cbError) =>
  useMutation(
    async ([method, newUser, token]) => {
      return await axios({
        method,
        url: '/api/admin/users',
        headers: {
          Authorization: token,
        },
        data: newUser,
      });
    },
    {
      onSuccess: cbSuccess,
      onError: (err) => cbError(err.response.data.message),
    }
  );
