import { Divider, Popover, Typography, Box } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useSelector, useDispatch } from 'react-redux';
import { setAnchorEl } from '../../../redux/slices/cartSlice';
import DialogCartItem from '../../../components/dialogCart/DialogCartItem';
import CommonButton from '../../../components/common/buttons/CommonButton';
import { Link } from 'react-router-dom';

const cartItemContainer = {
  maxHeight: '310px',
  boxSizing: 'border-box',
  width: { xs: '300px', md: '320px' },
  overflowY: 'auto',
  overflowX: 'hidden',
  '::-webkit-scrollbar': {
    width: '8px',
  },
  '::-webkit-scrollbar-track': {
    background: '#f1f1f1',
    borderRadius: '5px',
  },
  '::-webkit-scrollbar-thumb': {
    margin: '20px',
    backgroundColor: 'primary.main',
    borderRadius: '5px',
  },
};

const DialogCartContainer = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const getTotalPrice = () => {
    const reducer = (acc, item) => acc + item.quantity * item.price * item.size;
    return cart.cartItems.reduce(reducer, 0);
  };

  const handleClose = () => {
    dispatch(setAnchorEl(null));
  };

  return (
    <Popover
      open={Boolean(cart.anchorEl)}
      anchorEl={document.getElementById(cart.anchorEl) || null}
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
      <Box sx={{ padding: '10px' }}>
        <Box id="shoppingCart_cartItemsContainer" sx={cartItemContainer}>
          {cart.cartItems.map((item, index) => (
            <DialogCartItem
              key={cart.cartItems.indexOf(item)}
              cartItem={item}
              handleClose={handleClose}
              index={index}
            />
          ))}
        </Box>
        <Divider sx={{ marginTop: '10px', marginBottom: '10px' }} />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '10px',
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 400 }}>
            TOTAL:
          </Typography>
          <Typography
            color="primary"
            variant="h5"
            sx={{ fontWeight: 400, marginLeft: '10px' }}
          >
            {getTotalPrice().toFixed(2)} MLD
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: '15px',
            marginBottom: '10px',
          }}
        >
          <Link to="/checkout" style={{ textDecoration: 'none' }}>
            <CommonButton onClick={() => dispatch(setAnchorEl(null))}>
              <CheckIcon fontSize="small" />
              {'Checkout'}
            </CommonButton>
          </Link>

          <Link to="/cart" style={{ textDecoration: 'none' }}>
            <CommonButton onClick={() => dispatch(setAnchorEl(null))}>
              <ShoppingBasketIcon
                fontSize="small"
                sx={{ paddingRight: '5px' }}
              />
              {' View Cart'}
            </CommonButton>
          </Link>
        </Box>
      </Box>
    </Popover>
  );
};

export default DialogCartContainer;
