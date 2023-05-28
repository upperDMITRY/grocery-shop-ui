import { Typography } from '@mui/material';

const ProductName = ({ name }) => {
  return (
    <Typography
      variant="h4"
      sx={{ fontFamily: 'Lemonada', fontWeight: 700, fontSize: '28px' }}
    >
      {name}
    </Typography>
  );
};

export default ProductName;
