import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const ProductReducer = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setProducts } = ProductReducer.actions;
export default ProductReducer.reducer;
