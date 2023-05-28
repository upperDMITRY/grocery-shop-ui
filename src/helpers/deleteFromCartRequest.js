import axios from 'axios';

export const deleteFromCartRequest = (product) => {
  const { productId, size, quantity, email, isAuth, token } = product;

  if (isAuth) {
    axios({
      method: 'delete',
      url: '/api/cart',
      headers: {
        Authorization: token,
      },
      data: {
        productId,
        size,
        quantity,
        userEmail: email,
      },
    });
  }
};
