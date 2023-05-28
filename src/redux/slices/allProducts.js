import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  pageNumber: 1,
  numberOfElements: 0,
  allProductsError: '',
};

export const allProducts = createSlice({
  name: 'allProducts',
  initialState,
  reducers: {
    setPageNumber: (state, action) => {
      state.pageNumber = action.payload;
    },
    setNumberOfElements: (state, action) => {
      state.numberOfElements = action.payload;
    },
    setAllProductsError: (state, action) => {
      state.allProductsError = action.payload;
    },
  },
});

export const { setPageNumber, setNumberOfElements, setAllProductsError } =
  allProducts.actions;

export default allProducts.reducer;
