import { createSlice } from "@reduxjs/toolkit";
import { OrderStatuses } from "../enums";
import { CartItem, OrderItem } from "../interfaces";

const ordersState = createSlice({
  name: "cart",
  initialState: {
    cart: [] as Array<CartItem>,
  },
  reducers: {
    startOrder: (state) => {
      state.cart = state.cart.map((cartItem) => ({
        ...cartItem,
        status:
          cartItem.status === OrderStatuses.PENDING
            ? OrderStatuses.SETTINGUP
            : cartItem.status,
      }));
    },
    updateCart: (state, action) => {
      const foundItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (foundItem) {
        state.cart = state.cart.map((item) => {
          if (foundItem.id === item.id) {
            return action.payload;
          }
          return item;
        });
      } else {
        state.cart.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter(({ id }) => {
        console.log(
          "id !== action.payload.id >> ",
          id !== action.payload.id,
          id,
          action.payload.id
        );

        return id !== action.payload.id;
      });
    },
  },
});

export const { updateCart, removeItem, startOrder } = ordersState.actions;
export default ordersState.reducer;
