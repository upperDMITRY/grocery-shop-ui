import axios from 'axios';
import { useMutation } from 'react-query';

export const useMutationRemoveUser = (cbSuccess, cbError) =>
  useMutation(
    async ([removingUser, token]) => {
      return await axios({
        method: 'delete',
        url: '/api/admin/users',
        headers: {
          Authorization: token,
        },
        data: removingUser.email,
      });
    },
    {
      onSuccess: cbSuccess,
      onError: (err) => cbError(err.response.data.message),
    }
  );
