import { Button } from '@mui/material';

const sizeTypes = {
  KILOS: 'kg',
  PACKS: 'pcs',
};

const ProductSizeButton = ({ active, index, product, handleSizeChange }) => {
  return (
    <Button
      variant={'contained'}
      disableElevation
      sx={{
        textTransform: 'none',
        fontSize: '16px',
        padding: '0 5px',
        fontWeight: active ? 500 : 400,
        color: active ? 'common.white' : 'common.black',
        borderRadius: '5px',
        backgroundColor: active ? 'primary.main' : 'common.white',
        border: '1px solid',
        borderColor: active ? 'primary.main' : 'grey20.main',
      }}
      color={active ? 'primary' : 'grey20'}
      onClick={() => handleSizeChange(index)}
    >
      {product.sizes[index]} {sizeTypes[product.sizeType]}
    </Button>
  );
};

export default ProductSizeButton;
