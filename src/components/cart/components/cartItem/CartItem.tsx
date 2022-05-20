import { FC } from "react";
import { CartItemProps } from "../../interfaces";
import { AddRemoveButtons } from "../addRemoveButtons/AddRemoveButtons";
import "./CartItem.css";

export const CartItem: FC<CartItemProps> = ({
  name,
  currency,
  totalPrice,
  id,
}) => {

  return (
    <div className="cart-item-wrapper">
      <div className="cart-item-details">
        <p className="cart-item-name">{name}</p>
        <p className="cart-item-price">
          {totalPrice} {currency}
        </p>
      </div>
      <AddRemoveButtons id={id} />
    </div>
  );
};
