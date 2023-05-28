import { Box, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import GreenPageHeader from '../../components/common/GreenPageHeader';
import CommonButton from '../../components/common/buttons/CommonButton';
import emptyCartImage from '../../assets/empty-cart.png';
import CartItem from '../../components/cartItem/CartItem';
import { useSelector } from 'react-redux';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const cartContainerStyle = {
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: { xs: 4, lg: 10 },
  paddingRight: { xs: 4, lg: 10 },
};

const cartWrapperStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
};

const cartStyle = {
  width: '100%',
  paddingBottom: '15px',
  display: 'flex',
  alignItems: 'baseline',
  borderBottom: '1px solid #dadada',
  gap: '8px',
};

const titleStyle = {
  fontFamily: 'Lemonada',
  textTransform: 'uppercase',
  fontWeight: 700,
  fontSize: '18px',
};

const goToShopBtn = {
  textDecoration: 'none',
  color: '#fff',
};

const cartEmptyStyle = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  alignItems: 'center',
  margin: '80px 30px',
};

const CartContainer = () => {
  const cart = useSelector((state) => state.cart);

  const filledCart = (
    <Box sx={cartWrapperStyle}>
      <Box sx={cartStyle}>
        <Typography variant="h4" sx={titleStyle}>
          Products:
        </Typography>
        <Typography sx={titleStyle}>
          {cart.totalQuantity}
          <ShoppingBasketIcon sx={{ paddingTop: '10px' }} fontSize="medium" />
        </Typography>
      </Box>
      {cart.cartItems.map((item) => (
        <CartItem key={`${item.name}_${item.size}`} cartItem={item} />
      ))}
      <CommonButton fontSize={'16px'} padding={'10px 0'} width="170px">
        <Link style={goToShopBtn} to="/shop">
          Continue shopping
        </Link>
      </CommonButton>
    </Box>
  );

  const emptyCart = (
    <Box sx={cartEmptyStyle}>
      <CardMedia
        component="img"
        image={emptyCartImage}
        sx={{ width: '100px' }}
      />
      <Typography
        sx={{
          fontFamily: 'Lemonada',
          fontSize: '28px',
          margin: '30px 0 15px',
        }}
      >
        No items in cart
      </Typography>
      <Typography sx={{ margin: '0 0 25px' }}>
        Add the products you want to buy
      </Typography>
      <CommonButton padding={'11px 30px'} fontSize={'16px'}>
        <Link style={goToShopBtn} to="/">
          Start shopping
        </Link>
      </CommonButton>
    </Box>
  );

  return (
    <>
      <GreenPageHeader title={'Your Shopping Cart'} />
      <Box sx={cartContainerStyle}>
        {cart.cartItems.length ? filledCart : emptyCart}
      </Box>
    </>
  );
};

export default CartContainer;
