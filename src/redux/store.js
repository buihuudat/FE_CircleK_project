import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "./reducers/loadingReducer";
import modalReducer from "./reducers/modalReducer";
import userReducer from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    modal: modalReducer,
    loading: loadingReducer,
  },
});

export default store;
