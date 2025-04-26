import { configureStore } from "@reduxjs/toolkit";
import countItemReducer from "../slices/countItemSlice";
import cartReducer from "../slices/cartSlice";
import  countIndiReducer from "../slices/countIndiItem"


const appStore = configureStore({
  reducer: {
    countItem: countItemReducer,
    cart: cartReducer,
    countIndiItem:countIndiReducer
  },
});

export default appStore;
