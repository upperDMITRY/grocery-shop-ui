import { Box, useMediaQuery } from '@mui/material';
import NavIconLink from '../../../components/home/header/NavIconLink';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartBadge from '../../../components/home/header/ShoppingCartBadge';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { logOut } from '../../../redux/slices/authSlice';
import {
  rewriteCart,
  setAnchorEl,
  setIsEmpty,
} from '../../../redux/slices/cartSlice';
import axios from 'axios';

const navIconStyle = {
  fontSize: 20,
};

const accountBoxIcon = <AccountBoxIcon sx={navIconStyle} />;
const logOutIcon = <LogoutIcon sx={navIconStyle} />;
const shoppingCartIcon = <ShoppingCartIcon sx={navIconStyle} />;

const NavIconLinksContainer = () => {
  const email = useSelector((state) => state.auth.email);
  const isAuth = useSelector((state) => state.auth.isAuth);
  const cart = useSelector((state) => state.cart);

  const [authState, setAuthState] = useState(false);

  const dispatch = useDispatch();

  const navIconLinksContainer = {
    display: 'flex',
    justifyContent: { xs: 'center', sm: 'flex-end' },
    flexGrow: 1,
    flex: useMediaQuery('(max-width:475px)') ? 'auto' : 'none',
    gap: 1,
  };

  useEffect(() => {
    setAuthState(isAuth);
  }, [isAuth]);

  const handleLogOut = () => {
    if (authState === true) {
      dispatch(logOut());
      dispatch(rewriteCart([]));
      axios.post('/api/auth/logout');
      localStorage.removeItem('visitorId');
    }
  };

  const dialogueCartClickHandler = (event) => {
    cart.cartItems.length
      ? dispatch(setAnchorEl('navIconLink_shoppingCart'))
      : dispatch(setIsEmpty('navIconLink_shoppingCart'));
  };

  return (
    <Box sx={navIconLinksContainer}>
      <NavIconLink
        tooltip={authState ? email : 'Sign in'}
        link={authState ? logOutIcon : accountBoxIcon}
        to={authState ? '/account/logout' : '/account/login'}
        onClick={handleLogOut}
        id="loginButton"
      />
      <NavIconLink
        link={shoppingCartIcon}
        onClick={dialogueCartClickHandler}
        to="#"
        id="shoppingCart"
      />
      <ShoppingCartBadge />
    </Box>
  );
};

export default NavIconLinksContainer;
