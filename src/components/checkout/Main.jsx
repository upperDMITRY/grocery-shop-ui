import { Typography, Box, Divider } from '@mui/material';
import { React, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import ContactInformation from './ContactInformation';
import SaveInformation from './SaveInformation';
import ShippingAddress from './ShippingAddress';
import CommonButton from '../common/buttons/CommonButton';
import { useDispatch, useSelector } from 'react-redux';
import { emailValidation } from '../../helpers/emailValidation';
import axios from 'axios';
import { anyString255Validation } from '../../helpers/anyString255Validation';
import { setIsChecked, setDataInDb } from '../../redux/slices/checkoutSlice';
import { rewriteCart } from '../../redux/slices/cartSlice';
import AccordionComponent from './AccordionComponent';

const mainStyle = {
  paddingRight: '4em',
  paddingTop: '4em',
  paddingLeft: '14%',
  color: '#333333',
  width: '55%',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  backgroundColor: '#fff',
  '@media (max-width : 1000px)': {
    width: '100%',
    paddingTop: '1.5em',
    paddingLeft: '15%',
    paddingRight: '15%',
  },
  '@media (max-width: 750px)': {
    display: 'block',
  },
};

const bottomButtons = {
  display: 'flex',
  alignItems: 'baseline',
  gap: '18px',
  marginBottom: '4em',
  '& a': {
    textDecoration: 'none',
    color: 'primary.main',
    '@media (max-width: 750px)': {
      paddingTop: '15px',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '&::before': {
        content: '"❮"',
        paddingRight: '5px',
      },
    },
  },
  '@media (max-width: 750px)': {
    display: 'block',
    marginBottom: '3em',
  },
};

const checkoutButtonStyle = {
  borderRadius: '5px',
  color: 'white',
  padding: '14px 24px',
  fontSize: '20px',
  width: '190px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: 'secondary.main',
  },
  '@media (max-width: 750px)': {
    width: '100%',
  },
};

const Main = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const auth = useSelector((state) => state.auth);
  const { token, isAuth } = auth;

  const checkout = useSelector((state) => state.checkout);
  const { needToSave, email, firstName, lastName, address, apartment } =
    checkout;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getTotalPrice = () => {
    const reducer = (acc, item) => acc + item.quantity * item.price * item.size;
    return cartItems.reduce(reducer, 0);
  };

  let totalPrice = getTotalPrice().toFixed(2);

  const [state, setState] = useState({
    email: email || '',
    errorEmail: '',
    firstName: firstName || '',
    errorFirstName: '',
    lastName: lastName || '',
    errorLastName: '',
    address: address || '',
    errorAddress: '',
    apartment: apartment || '',
    errorApartment: '',
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
      errorEmail: e.target.name === 'email' ? '' : state.errorEmail,
      errorFirstName: e.target.name === 'firstName' ? '' : state.errorFirstName,
      errorLastName: e.target.name === 'lastName' ? '' : state.errorLastName,
      errorAddress: e.target.name === 'address' ? '' : state.errorAddress,
      errorApartment: e.target.name === 'apartment' ? '' : state.errorApartment,
    });
  };
  const handleCheck = (e) => {
    dispatch(setIsChecked(e.target.checked));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    if (
      emailValidation(state, setState) &&
      anyString255Validation(state, setState, 'firstName', 'errorFirstName') &&
      anyString255Validation(state, setState, 'lastName', 'errorLastName') &&
      anyString255Validation(state, setState, 'address', 'errorAddress') &&
      anyString255Validation(state, setState, 'apartment', 'errorApartment')
    ) {
      try {
        if (isAuth && needToSave) {
          const response = await axios({
            method: 'post',
            url: '/api/checkout',
            headers: {
              Authorization: token,
            },
            data: {
              needToSave: true,
              totalPrice: totalPrice,
              email: state.email,
              firstName: state.firstName,
              lastName: state.lastName,
              address: state.address,
              apartment: state.apartment,
              orderList: cartItems,
            },
          });

          if (response.status === 201) {
            dispatch(
              setDataInDb({
                needToSave: true,
                email: state.email,
                firstName: state.firstName,
                lastName: state.lastName,
                address: state.address,
                apartment: state.apartment,
              })
            );
            dispatch(rewriteCart([]));
            history.push('/');
          }
        } else if (isAuth && !needToSave) {
          const response = await axios({
            method: 'post',
            url: '/api/checkout',
            headers: {
              Authorization: token,
            },
            data: {
              needToSave: false,
              totalPrice: totalPrice,
              email: state.email,
              firstName: state.firstName,
              lastName: state.lastName,
              address: state.address,
              apartment: state.apartment,
              orderList: cartItems,
            },
          });

          if (response.status === 201) {
            dispatch(
              setDataInDb({
                needToSave: false,
                email: '',
                firstName: '',
                lastName: '',
                address: '',
                apartment: '',
              })
            );
            dispatch(rewriteCart([]));
            history.push('/');
          }
        } else if (!isAuth) {
          await axios({
            method: 'post',
            url: '/api/checkout',
            data: {
              needToSave: false,
              totalPrice: totalPrice,
              email: state.email,
              firstName: state.firstName,
              lastName: state.lastName,
              address: state.address,
              apartment: state.apartment,
              orderList: cartItems,
            },
          });
          dispatch(rewriteCart([]));
          history.push('/');
        }
      } catch (err) {
        if (axios.isAxiosError(err)) {
          if (err && err.response) {
            throw new Error(err.response.data.message);
          }
        }
      }
    }
  };

  return (
    <Box sx={mainStyle}>
      <Link
        to="/"
        style={{
          textDecoration: 'none',
          color: '#333333',
        }}
      >
        <Typography
          sx={{ fontSize: '26px', lineHeight: '1.3em', paddingBottom: '28px' }}
        >
          Grocery shop
        </Typography>
      </Link>

      <AccordionComponent cartItems={cartItems} totalPrice={totalPrice} />

      <ContactInformation
        handleChange={handleChange}
        value={state.email}
        error={state.errorEmail}
      />
      <ShippingAddress state={state} handleChange={handleChange} />
      {isAuth ? (
        <SaveInformation handleCheck={handleCheck} checked={needToSave} />
      ) : null}

      <Box sx={bottomButtons}>
        <CommonButton sx={checkoutButtonStyle} onClick={handleClick}>
          Checkout
        </CommonButton>

        <Link to="/cart">Return to cart</Link>
      </Box>
      <Box sx={{ padding: '14px 0px' }}>
        <Divider sx={{ marginBottom: '14px' }} />
        <Typography sx={{ color: '#737373', fontSize: '12px' }}>
          All rights reserved Grocery Shop
        </Typography>
      </Box>
    </Box>
  );
};

export default Main;
