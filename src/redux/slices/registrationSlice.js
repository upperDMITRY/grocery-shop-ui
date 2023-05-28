import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  loading: false,
};

export const registration = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = registration.actions;

export default registration.reducer;
