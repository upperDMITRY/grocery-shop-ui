import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  filters: {
    email: '',
    pageNumber: 1,
  },
  numberOfElements: 0,
  email: '',
  password: '',
  role: 'USER',
  status: 'ACTIVE',

  emailError: '',
  passwordError: '',
  openDialogRemoveUser: false,
  removingUser: { email: null },
  disabledSaveButton: false,
  addNewUserError: '',
  adminUsersError: '',
};

export const adminUsers = createSlice({
  name: 'adminUsers',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    setNumberOfElements: (state, action) => {
      state.numberOfElements = action.payload;
    },
    initUser: (state) => {
      state.email = '';
      state.password = '';
      state.role = 'USER';
      state.status = 'ACTIVE';
    },
    setEditingUser: (state, action) => {
      state.email = action.payload?.email;
      state.password = action.payload?.password;
      state.role = action.payload?.role;
      state.status = action.payload?.status;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setRole: (state, action) => {
      state.role = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setEmailError: (state, action) => {
      state.emailError = action.payload;
    },
    setPasswordError: (state, action) => {
      state.passwordError = action.payload;
    },
    setOpenDialogRemoveUser: (state, action) => {
      state.openDialogRemoveUser = action.payload;
    },
    setRemovingUser: (state, action) => {
      state.removingUser = action.payload;
    },
    setDisabledSaveButton: (state, action) => {
      state.disabledSaveButton = action.payload;
    },
    setAdminUsersError: (state, action) => {
      if (action.payload === 'Jwt is invalid') {
        state.adminUsersError = 'You are not logged in as administrator';
      } else {
        state.adminUsersError = action.payload;
      }
    },
  },
});

export const {
  setFilters,
  setNumberOfElements,
  initUser,
  setEditingUser,
  setEmail,
  setPassword,
  setRole,
  setStatus,
  setEmailError,
  setPasswordError,
  setOpenDialogRemoveUser,
  setRemovingUser,
  setDisabledSaveButton,
  setAdminUsersError,
} = adminUsers.actions;

export default adminUsers.reducer;
