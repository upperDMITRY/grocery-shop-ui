import { Box, Typography, Button, TextField } from '@mui/material';

const productQuantityContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  marginTop: 3,
};

const mathSignStyle = {
  width: '30px',
  minWidth: '30px',
  height: '30px',
  borderRadius: 0,
  border: '1px solid',
  borderColor: 'grey20.main',
  transition: 'all 0.3s',
  color: 'common.black',
  ':hover': {
    backgroundColor: 'primary.main',
    borderColor: 'primary.main',
    color: 'common.white',
  },
};

const productQuantityInputStyle = {
  '& input': {
    padding: 0,
    textAlign: 'center',
    width: '45px',
    height: '30px',
    borderTop: '1px solid',
    borderBottom: '1px solid',
    borderColor: 'grey20.main',
    boxSizing: 'border-box',
  },
  '& fieldset': {
    display: 'none',
  },
};

const ProductQuantity = ({
  handleDecreaseQuantity,
  handleIncreaseQuantity,
  handleQuantityChange,
  quantity,
}) => {
  return (
    <Box sx={productQuantityContainerStyle}>
      <Typography sx={{ fontWeight: 700, minWidth: 140 }}>Quantity:</Typography>
      <Button
        onClick={handleDecreaseQuantity}
        sx={{
          ...mathSignStyle,
          borderTopLeftRadius: '5px',
          borderBottomLeftRadius: '5px',
        }}
      >
        -
      </Button>
      <TextField
        value={quantity}
        onChange={handleQuantityChange}
        sx={productQuantityInputStyle}
      />
      <Button
        onClick={handleIncreaseQuantity}
        sx={{
          ...mathSignStyle,
          borderTopRightRadius: '5px',
          borderBottomRightRadius: '5px',
        }}
      >
        +
      </Button>
    </Box>
  );
};

export default ProductQuantity;
