import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setUser } = userReducer.actions;
export default userReducer.reducer;
