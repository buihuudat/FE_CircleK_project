import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: {
    status: false,
    data: {},
  },
};

export const modalReducer = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setProductModal: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const { setProductModal } = modalReducer.actions;
export default modalReducer.reducer;
