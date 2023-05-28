import { Box, Typography } from '@mui/material';
import { numberWithCommas } from '../../helpers/numberWithCommas';

const ProductPrice = ({ price }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginTop: 2,
      }}
    >
      <Typography sx={{ fontWeight: 700, minWidth: 140 }}>Price:</Typography>
      <Typography
        sx={{ fontWeight: 700, minWidth: 140, color: 'primary.main' }}
      >
        {numberWithCommas(price)} L
      </Typography>
    </Box>
  );
};

export default ProductPrice;
