import { FC } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../../../redux";
import { OrderItem } from "../../../../redux/reducers/interfaces";
import { Button } from "../../../forms/button/Button";
import { ButtonTypes } from "../../../forms/button/enums";
import "./FoodDetailsPreview.css";

export const FoodDetailsPreview: FC = () => {
  const { id } = useParams();
  const order = useSelector<RootState>((state) =>
    state.orders.orders.find((order) => id === order.id)
  ) as OrderItem;
  return (
    <div className="food-details-preview">
      <h3 className="food-details-title">{order.name}</h3>
      <p className="food-details-price">
        Total price {order.price} {order.currency}
      </p>
      <p className="food-details-description">{order.description}</p>
    </div>
  );
};
