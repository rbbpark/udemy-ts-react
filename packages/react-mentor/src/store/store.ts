import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cartSlice";
import { sessionsApi } from "../services/sessions";

export const store = configureStore({
  reducer: {
    [sessionsApi.reducerPath]: sessionsApi.reducer,
    cart: cartSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sessionsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
