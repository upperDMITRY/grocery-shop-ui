import { Box, Typography } from '@mui/material';
import ProductSizeButton from './ProductSizeButton';

const ProductSize = ({ sizes, activeSize, product, handleSizeChange }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginTop: 2,
      }}
    >
      <Typography sx={{ fontWeight: 700, minWidth: 140 }}>Size:</Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
          width: 'calc(100% - 140px)',
        }}
      >
        {sizes.map((size, index) => {
          return (
            <ProductSizeButton
              key={size}
              active={index === activeSize ? true : false}
              index={index}
              product={product}
              handleSizeChange={handleSizeChange}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default ProductSize;
