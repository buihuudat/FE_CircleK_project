import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: {
    status: false,
    data: {},
  },
  signin: false,
  signup: false,
  cart: false,
};

export const modalReducer = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setProductModal: (state, action) => {
      state.product = action.payload;
    },
    setSigninModal: (state, action) => {
      state.signin = action.payload;
    },
    setSignupModal: (state, action) => {
      state.signup = action.payload;
    },
    setCartModal: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export const { setProductModal, setCartModal, setSigninModal, setSignupModal } =
  modalReducer.actions;
export default modalReducer.reducer;
