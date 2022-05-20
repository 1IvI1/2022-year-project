import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { OrderStatuses } from "../../redux/reducers/enums";
import { CartItem } from "../../redux/reducers/interfaces";
import { TrackerItem } from "./components/trackerItem/TrackerItem";
import "./FoodTracker.css";

export const FoodTracker: FC = () => {
  const cart = useSelector<RootState>(
    (state) => state.cart.cart
  ) as Array<CartItem>;

  return (
    <div className="food-tacker-wrapper">
      {cart.map(
        (cartItem) =>
          cartItem.status !== OrderStatuses.PENDING && (
            <TrackerItem {...cartItem} key={cartItem.id} />
          )
      )}
    </div>
  );
};
