import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "./reducers/loadingReducer";
import modalReducer from "./reducers/modalReducer";
import producerReducer from "./reducers/producerReducer";
import productReducer from "./reducers/productReducer";
import userReducer from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    modal: modalReducer,
    loading: loadingReducer,
    products: productReducer,
    producer: producerReducer,
  },
});

export default store;
