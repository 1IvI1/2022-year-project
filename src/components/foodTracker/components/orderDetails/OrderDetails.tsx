import { FC } from "react";
import { OrderDetailsProps } from "../../interfaces";
import "./OrderDetails.css";
import kebabCase from 'lodash/kebabCase'

export const OrderDetails: FC<OrderDetailsProps> = ({name, status, estimatedTime, totalPrice, currency, extraOptions, id}) => {
  return (
    <div className="order-details-wrapper" style={{ backgroundImage: `url(${require(`../../../../assets/${kebabCase(name.toLowerCase())}.jpg`)})` }}>
      <p className="order-item-name">
        <b>Order:</b> {name}
      </p>
      <p className="order-item-status">
        <b>Status:</b> {status}
      </p>
      <p className="order-item-time">
        <b>Price:</b> {totalPrice} {currency}
      </p>
      <p className="order-item-time">
        <b>Extra options:</b> {extraOptions.filter(x => x.count).map(x => x.name).join()}
      </p>
      <p className="order-item-time">
        <b>Time left:</b> {estimatedTime}
      </p>
      <div className="order-details-backdrop" />
    </div>
  );
};
