import { Box } from '@mui/material';
import CommonButton from '../common/buttons/CommonButton';

const AddToCartButton = ({ handleAddToCart, disabled }) => {
  return (
    <Box sx={{ marginTop: 4 }}>
      <CommonButton
        fontSize="16px"
        padding="7px 30px"
        onClick={handleAddToCart}
        disabled={disabled}
      >
        {'Add to Cart'}
      </CommonButton>
    </Box>
  );
};

export default AddToCartButton;
