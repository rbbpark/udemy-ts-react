import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { Session } from "../types";

type cartState = {
  items: Session[];
};

const initialState: cartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Session>) {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
      if (itemIndex === -1) state.items.push(action.payload);
    },
    removeFromCart(state, action: PayloadAction<string>) {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload);
      if (itemIndex >= 0) state.items.splice(itemIndex, 1);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
