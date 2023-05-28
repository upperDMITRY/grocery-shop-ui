import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  needToSave: false,
  email: localStorage.getItem('email') || '',
  firstName: localStorage.getItem('firstName') || '',
  lastName: localStorage.getItem('lastName') || '',
  address: localStorage.getItem('address') || '',
  apartment: localStorage.getItem('apartment') || '',
};

export const checkout = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    setIsChecked: (state, action) => {
      state.needToSave = action.payload;
    },
    setDataInDb: (state, action) => {
      const { needToSave, email, firstName, lastName, address, apartment } =
        action.payload;

      state.needToSave = needToSave;

      state.email = email;
      localStorage.setItem('email', email);

      state.firstName = firstName;
      localStorage.setItem('firstName', firstName);

      state.lastName = lastName;
      localStorage.setItem('lastName', lastName);

      state.address = address;
      localStorage.setItem('address', address);

      state.apartment = apartment;
      localStorage.setItem('apartment', apartment);
    },
  },
});

export const { setIsChecked, setDataInDb } = checkout.actions;

export default checkout.reducer;
