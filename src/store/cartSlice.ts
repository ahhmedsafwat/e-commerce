import { createSlice } from "@reduxjs/toolkit";
import { cartProdcut } from "./store";

const loadCartFromStorage = (): cartProdcut[] | undefined => {
  try {
    const cartItems = localStorage.getItem("cartItems");
    return cartItems ? JSON.parse(localStorage.getItem("cartItems")!) : [];
  } catch (error) {
    console.log(`Error loading cart items from storage : ${error}`);
  }
};

const saveCartItems = (cartItems: cartProdcut[]) => {
  try {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  } catch (error) {
    console.log(`Error saving cart items from storage : ${error}`);
  }
};

const initialState = {
  cartItems: loadCartFromStorage() || [],
};

const cartReducer = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart(state, action) {
      const newitem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.prodcut.id === newitem.prodcut.id
      );
      if (existingItem) {
        existingItem.ammount += newitem.ammount || 1;
      } else {
        state.cartItems.push(newitem);
      }
      saveCartItems(state.cartItems);
    },
    removeFromCart(state, action) {
      const removedItem = state.cartItems.filter(
        (item) => item.prodcut.id !== action.payload.prodcut.id
      );
      state.cartItems = removedItem;
      saveCartItems(state.cartItems);
    },
  },
});

export const { addToCart, removeFromCart } = cartReducer.actions;

export default cartReducer.reducer;
