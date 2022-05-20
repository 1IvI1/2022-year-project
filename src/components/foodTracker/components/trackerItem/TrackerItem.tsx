import moment from "moment";
import { FC } from "react";
import { TrackerItemProps } from "../../interfaces";
import { OrderDetails } from "../orderDetails/OrderDetails";
import "./TrackerItem.css";

export const TrackerItem: FC<TrackerItemProps> = (props) => {
  return (
    <div className="tracker-item-main">
      <h4 className="tracker-item-date">Your order for {props.date}</h4>
      <div className="track-orders">
        <OrderDetails {...props} />
      </div>
    </div>
  );
};
