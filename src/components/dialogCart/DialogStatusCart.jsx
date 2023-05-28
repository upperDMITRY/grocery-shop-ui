import { Popover, Typography, Box } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { setIsEmpty } from '../../redux/slices/cartSlice';

const DialogStatusCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleClose = () => {
    dispatch(setIsEmpty(null));
  };

  if (cart.isEmpty) {
    setTimeout(() => {
      dispatch(setIsEmpty(null));
    }, 1000);
  }

  return (
    <Popover
      open={Boolean(cart.isEmpty)}
      anchorEl={document.getElementById(cart.isEmpty) || null}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <Box sx={{ width: '320px', padding: '10px 20px' }}>
        <Typography sx={{ textAlign: 'center' }}>
          Your cart is currently empty.
        </Typography>
      </Box>
    </Popover>
  );
};

export default DialogStatusCart;
