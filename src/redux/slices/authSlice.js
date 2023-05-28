import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  isAuth: false,
  email: localStorage.getItem('email') || '',
  token: localStorage.getItem('token') || '',
  loading: false,
  error: '',
  visitorId: '',
};

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuth: (state, action) => {
      const { email, token, isAuth } = action.payload;

      state.email = email;
      localStorage.setItem('email', email);

      state.token = token;
      localStorage.setItem('token', token);

      state.isAuth = isAuth;
    },
    logOut: (state, action) => {
      state.email = '';
      localStorage.removeItem('email');

      state.token = '';
      localStorage.removeItem('token');

      state.isAuth = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setVisitorId: (state, action) => {
      state.visitorId = action.payload;
    },
  },
});

export const { setIsAuth, setLoading, setError, logOut, setVisitorId } =
  auth.actions;

export default auth.reducer;
