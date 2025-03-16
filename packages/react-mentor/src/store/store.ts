import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cartSlice";
import { sessionsApi } from "../services/sessionsApi";

// Create the root reducer independently to obtain the RootState type
const rootReducer = combineReducers({
  cart: cartSlice.reducer,
  [sessionsApi.reducerPath]: sessionsApi.reducer,
});

export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sessionsApi.middleware),
    preloadedState,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore["dispatch"];
export type AppStore = ReturnType<typeof setupStore>;
