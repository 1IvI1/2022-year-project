import { OrderStatuses } from "./enums";

export interface OrderItem {
  id: string;
  estimatedTime: string;
  name: string;
  rating: number;
  price: number;
  currency: string;
  description: string;
  extraOptions: Array<OrderExtraOption>;
}

export interface OrderExtraOption {
  name: string;
  weight: string;
  price: number;
  currency: string;
  id: string;
}

export interface CartItemExtraOptions extends OrderExtraOption {
  count: number;
  totalPrice: number;
}

export interface CartItem {
  estimatedTime: string;
  status: OrderStatuses;
  id: string;
  name: string;
  totalPrice: number;
  currency: string;
  extraOptions: Array<CartItemExtraOptions>;
  date: string;
}