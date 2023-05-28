import { Badge } from '@mui/material';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

const ShoppingCartBadge = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const shoppingCartBadgeNumer = useRef();

  useEffect(() => {
    if (shoppingCartBadgeNumer.current) {
      shoppingCartBadgeNumer.current.children[0].id = 'shoppingCartBadgeNumer';
    }
  }, []);

  return (
    <Badge
      ref={shoppingCartBadgeNumer}
      sx={{
        '& .MuiBadge-badge': {
          right: 10,
          top: 1,
          padding: '0 8px',
          color: 'common.white',
        },
      }}
      badgeContent={totalQuantity}
      color="primary"
    />
  );
};

export default ShoppingCartBadge;
