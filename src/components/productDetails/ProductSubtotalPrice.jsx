import { Box, Typography } from '@mui/material';
import { numberWithCommas } from '../../helpers/numberWithCommas';

const ProductSubtotalPrice = ({ price, quantity, sizes, activeSize }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginTop: 2,
      }}
    >
      <Typography sx={{ fontWeight: 700, minWidth: 140 }}>
        Subtotal price:
      </Typography>
      <Typography
        sx={{ fontWeight: 700, minWidth: 140, color: 'common.black' }}
      >
        {`${numberWithCommas(
          Math.round(price * quantity * sizes[activeSize] * 100) / 100
        )} L`}
      </Typography>
    </Box>
  );
};

export default ProductSubtotalPrice;
