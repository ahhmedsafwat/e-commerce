import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Product } from "../helper/useFectchApi";
import cartReducer from "./cartSlice";
export interface cartProdcut {
  prodcut: Product;
  ammount: number;
  size: string;
}

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
const rootReducer = combineReducers({
  cart: cartReducer,
});

export default store;
export type RootState = ReturnType<typeof rootReducer>;
