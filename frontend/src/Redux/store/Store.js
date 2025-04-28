
import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "@/Redux/productsSlice";
import cartReducer from "../cartSlice"
import userReducer from '@/Redux/user/userSlice'
import shippingReducer from "@/Redux/shipingAddress/shippingAddressSlice"

const store = configureStore({
  reducer: {
    products: productsReducer,
    user: userReducer,
    cart: cartReducer,
    shipping: shippingReducer
  },
});

export default store;
