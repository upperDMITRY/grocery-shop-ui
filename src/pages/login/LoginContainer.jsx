import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { Box, Divider, Paper, Typography } from '@mui/material';
import LoginInput from '../../components/login/LoginInput';
import CommonButton from '../../components/common/buttons/CommonButton';
import GreenPageHeader from './../../components/common/GreenPageHeader';
import ButtonSpinner from '../../components/common/ButtonSpinner';
import AuthErrorAlert from '../../components/common/AuthErrorAlert';
import { emailValidation } from '../../helpers/emailValidation';
import { passwordValidation } from '../../helpers/passwordValidation';
import { setIsAuth, setError } from '../../redux/slices/authSlice';
import { setLoading } from '../../redux/slices/loginSlice';
import {
  pageContainerStyle,
  formContainerStyle,
  formStyle,
  footerLinksStyle,
} from '../../components/common/styles/loginAndRegistrationStyles';
import { rewriteCart } from '../../redux/slices/cartSlice';
import jwt_decode from 'jwt-decode';

const LoginContainer = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.login.loading);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const visitorId = useSelector((state) => state.auth.visitorId);

  const [state, setState] = useState({
    email: '',
    password: '',
    errorEmail: '',
    errorPassword: '',
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
      errorEmail: e.target.name === 'email' ? '' : state.errorEmail,
      errorPassword: e.target.name === 'password' ? '' : state.errorPassword,
    });
  };

  const { email, password } = state;

  const handleClick = async (e) => {
    e.preventDefault();

    if (
      emailValidation(state, setState) &&
      passwordValidation(state, setState)
    ) {
      try {
        dispatch(setLoading(true));

        const response = await axios.post('/api/auth/login', {
          email: email.toLowerCase(),
          password,
          cartItems,
          visitorId,
        });

        if (response.status === 200) {
          localStorage.setItem('visitorId', visitorId);
          const token = response.data.token;
          dispatch(
            setIsAuth({
              email: response.data.email,
              token,
              isAuth: true,
            })
          );
          const decodedToken = jwt_decode(token);
          if (decodedToken.role === 'ADMIN') {
            history.push('/admin/dashboard');
          } else {
            history.push('/');
          }

          dispatch(rewriteCart(response.data.cartItems));
        }
      } catch (err) {
        if (axios.isAxiosError(err)) {
          if (err && err.response) {
            dispatch(setError(err.response.data.message));
          }
        }
      } finally {
        dispatch(setLoading(false));
      }
    }
  };

  return (
    <>
      <AuthErrorAlert />
      <GreenPageHeader title="Login" />
      <Box sx={pageContainerStyle}>
        <Paper elevation={0} sx={formContainerStyle}>
          <Box component="form" sx={formStyle} noValidate autoComplete="off">
            <LoginInput
              label="Email"
              type="email"
              autoFocus={true}
              value={state.email}
              error={state.errorEmail}
              handleChange={handleChange}
            />
            <LoginInput
              label="Password"
              type="password"
              value={state.password}
              error={state.errorPassword}
              handleChange={handleChange}
            />
            <Box>
              <CommonButton
                padding="7px 30px"
                fontSize="16px"
                onClick={handleClick}
                type="submit"
                disabled={loading}
              >
                {'Sign In'}
                {loading && <ButtonSpinner />}
              </CommonButton>
            </Box>
          </Box>
          <Divider sx={{ marginTop: 3 }} />
          <Box sx={footerLinksStyle}>
            <Link to="/account/register">
              <Typography>Create account</Typography>
            </Link>
            <Link to="/">
              <Typography>Return to Store</Typography>
            </Link>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default LoginContainer;
