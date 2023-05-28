import axios from 'axios';

export const addToCartRequest = (product) => {
  const { productId, size, quantity, email, isAuth, token } = product;

  if (isAuth) {
    axios({
      method: 'post',
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
