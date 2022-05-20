import { createSlice } from "@reduxjs/toolkit";
import { OrderItem } from "../interfaces";

const ordersState = createSlice({
  name: "orders",
  initialState: {
    orders: [
      {
        id: "kebab",
        estimatedTime: '15 minutes',
        name: "Kebab",
        rating: 90,
        price: 14,
        currency: "USD",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ornare tempor leo ut lacinia. Fusce.",
        extraOptions: [
          { name: "Fried Potato", currency: "USD", price: 1, weight: "150g", id: '0' },
          { name: "Cola", currency: "USD", price: 3, weight: "500ml", id: '1' },
        ],
      },
      {
        id: "soup-mexica",
        estimatedTime: '15 minutes',
        name: "Soup mexica",
        rating: 90,
        price: 14,
        currency: "USD",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ornare tempor leo ut lacinia. Fusce.",
        extraOptions: [
          { name: "Fried Potato", currency: "USD", price: 1, weight: "150g", id: '0' },
          { name: "Cola", currency: "USD", price: 3, weight: "500ml", id: '1' },
        ],
      },
    ] as Array<OrderItem>,
  },
  reducers: {},
});

export const {} = ordersState.actions;
export default ordersState.reducer;
