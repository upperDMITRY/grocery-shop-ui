import { Typography, Box } from '@mui/material';
import { priceStyle } from './ProductPrice';

const totalPrice = {
  display: 'flex',
  gap: '5px',
  '@media (max-width: 750px)': {
    margin: '0 auto',
  },
};

const ProductTotalPrice = ({ price, quantity, size }) => {
  return (
    <Box sx={totalPrice}>
      <Typography
        sx={{
          color: '#b7b5b6',
          fontWeight: 600,
        }}
      >
        {`Total: `}
      </Typography>
      <Typography sx={priceStyle}>
        {(price * quantity * size).toFixed(2) + ' L'}
      </Typography>
    </Box>
  );
};

export default ProductTotalPrice;
