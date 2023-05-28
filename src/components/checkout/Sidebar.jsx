import { Divider, Typography, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import CheckoutItem from './CheckoutItem';

const sidebarStyle = {
  paddingLeft: '3em',
  paddingTop: '4em',
  paddingRight: '5%',
  width: '45%',
  '@media (max-width: 1000px)': {
    display: 'none',
    width: '0%',
  },
};

export const itemsStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
  paddingBottom: '16px',
  '@media (max-width: 1000px)': {
    paddingTop: '15px',
  },
};

const Sidebar = () => {
  const cart = useSelector((state) => state.cart);

  const getTotalPrice = () => {
    const reducer = (acc, item) => acc + item.quantity * item.price * item.size;
    return cart.cartItems.reduce(reducer, 0);
  };

  return (
    <Box sx={sidebarStyle}>
      <Box sx={itemsStyle}>
        {cart.cartItems.map((item) => (
          <CheckoutItem key={`${item.name}_${item.size}`} cartItem={item} />
        ))}
      </Box>
      <Divider />
      <Box sx={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
        <Typography
          sx={{ fontSize: '16px', paddingTop: '16px', width: '100%' }}
        >
          Total
        </Typography>
        <Typography sx={{ fontSize: '22px', fontWeight: '500' }}>
          {`${getTotalPrice().toFixed(2)}`}
        </Typography>
        <Typography sx={{ color: '#717171', fontSize: '12px' }}>MLD</Typography>
      </Box>
    </Box>
  );
};

export default Sidebar;
