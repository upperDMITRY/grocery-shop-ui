import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductName = ({ productId, name }) => {
  return (
    <Link to={`/products/${productId}`} style={{ textDecoration: 'none' }}>
      <Typography
        sx={{
          lineHeight: 1,
          fontSize: '20px',
          fontWeight: 500,
          transition: 'color 0.3s',
          color: 'common.black',
          ':hover': {
            color: 'primary.main',
          },
        }}
      >
        {name}
      </Typography>
    </Link>
  );
};

export default ProductName;
