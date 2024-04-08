// store.ts

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Product } from "../helper/useFectchApi";
import cartReducer from "./cartSlice";
import priceReducer from "./priceReducer";

export interface cartProduct {
  product: Product; // Corrected typo: 'product' instead of 'prodcut'
  amount: number; // Corrected typo: 'amount' instead of 'ammount'
  size: string;
}

const rootReducer = combineReducers({
  cart: cartReducer,
  price: priceReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
export type RootState = ReturnType<typeof rootReducer>;
