import { configureStore } from "@reduxjs/toolkit";
import OrdersReducer from "./reducers/food/index";
import CartReducer from "./reducers/cart/index";

const store = configureStore({
  reducer: { orders: OrdersReducer, cart: CartReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

export default store;