import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  loading: false,
};

export const login = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = login.actions;

export default login.reducer;
