import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  filters: {
    name: '',
    pageNumber: 1,
  },
  numberOfElements: 0,
  id: null,
  name: '',
  description: '',
  price: '',
  rating: '',
  sizeType: 'KILOS',
  sizes: [1, 2, 3],
  image: '',
  imageLoaded: false,
  imageError: false,
  openDialogRemoveProduct: false,
  removingProduct: { id: null, name: null },
  disabledSaveButton: false,
  adminProductsError: '',
};

export const adminProducts = createSlice({
  name: 'adminProducts',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    setNumberOfElements: (state, action) => {
      state.numberOfElements = action.payload;
    },
    initProduct: (state) => {
      state.id = null;
      state.name = '';
      state.description = '';
      state.price = '';
      state.sizeType = 'KILOS';
      state.sizes = [1, 2, 3];
      state.image = '';
      state.rating = '';
    },
    setEditingProduct: (state, action) => {
      state.id = action.payload?.id;
      state.name = action.payload?.name;
      state.description = action.payload?.description;
      state.price = +action.payload?.price === 0 ? '' : action.payload?.price;
      state.sizeType = action.payload?.sizeType;
      state.sizes = action.payload?.sizes;
      state.image = action.payload?.image;
      state.rating =
        +action.payload?.rating === 0 ? '' : action.payload?.rating;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setPrice: (state, action) => {
      state.price = +action.payload;
    },
    setSizeType: (state, action) => {
      state.sizeType = action.payload;
    },
    setSizes: (state, action) => {
      state.sizes = action.payload;
    },
    setImage: (state, action) => {
      state.image = action.payload;
    },
    setRating: (state, action) => {
      state.rating = +action.payload;
    },
    setImageLoaded: (state, action) => {
      state.imageLoaded = action.payload;
    },
    setImageError: (state, action) => {
      state.imageError = action.payload;
    },
    setOpenDialogRemoveProduct: (state, action) => {
      state.openDialogRemoveProduct = action.payload;
    },
    setRemovingProduct: (state, action) => {
      state.removingProduct = action.payload;
    },
    setDisabledSaveButton: (state, action) => {
      state.disabledSaveButton = action.payload;
    },
    setAdminProductsError: (state, action) => {
      if (action.payload === 'Jwt is invalid') {
        state.adminProductsError = 'You are not logged in as administrator';
      } else {
        state.adminProductsError = action.payload;
      }
    },
  },
});

export const {
  setFilters,
  setNumberOfElements,
  initProduct,
  setEditingProduct,
  setName,
  setDescription,
  setPrice,
  setSizeType,
  setSizes,
  setImage,
  setRating,
  setImageLoaded,
  setImageError,
  setOpenDialogRemoveProduct,
  setRemovingProduct,
  setDisabledSaveButton,
  setAdminProductsError,
} = adminProducts.actions;

export default adminProducts.reducer;
